import React, { useEffect, useState} from "react";
import "../pages/CreatePost.css";

const CreatePost = () => {
    const [formData, setFormData] = useState({
        pageTitle: "",
        title: "",
        category: "",
        paragraphs: [],
    });
    const [posts, setPosts] = useState([]); // State to store fetched posts
    const [success, setSuccess] = useState(false); // State to manage success message
    const [editId, setEditId] = useState(null); // State to store the ID of the post being edited 


      const fetchPosts = async () => {
          try {
              const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}/api/newpost`);
              if (!response.ok) {
                  throw new Error("Failed to fetch posts.");
              }
              const data = await response.json();

              const sortedPosts = data.sort((a, b) => b.id - a.id);

              console.log("Fetched posts(sorted by id):", sortedPosts);
              setPosts(sortedPosts); 
          } catch (error) {
              console.error("Error fetching posts:", error);
          }
      };
          console.log('REACT_APP_FRONTEND_LOCAL_URL:', process.env.REACT_APP_FRONTEND_LOCAL_URL); 
     
      useEffect(() => {
        fetchPosts();
    }, []);

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "paragraphs") {
      setFormData((prevData) => ({
          ...prevData,
          [name]: value.split("\n"),
      }));
  } else {
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  }
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted:", formData);
    

    try {
      const url = editId ? `${process.env.REACT_APP_FRONTEND_LOCAL_URL}/api/newpost/${editId}` : `${process.env.REACT_APP_FRONTEND_LOCAL_URL}/api/newpost`;
      const method = editId ? "PUT" : "POST";

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

          console.log('REACT_APP_FRONTEND_LOCAL_URL:', process.env.REACT_APP_FRONTEND_LOCAL_URL); 

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Post creation failed:", errorData);
          throw new Error("Post creation failed");
        }

        const data = await response.json();
        console.log( editId? "Post created successfully" : "Post updated successfully", data);
        setFormData({
            pageTitle: "",
            title: "",
            category: "",
            paragraphs: [],
        });
        setSuccess(true);
        setEditId(null);
        fetchPosts();
    } catch (error) {
        console.error("Post creation failed:", error);
    }
  };

        const handleEdit = (post) => {
          setFormData({...post, paragraphs: post.paragraphs});
        setEditId(post.id);
      }

      const handleDelete = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}api/newpost/${id}`, {
                method: "DELETE",
            });
            
            if (!response.ok) {
                throw new Error("Failed to delete post");
            }

            await fetchPosts(); // Fetch the updated list of posts
        } catch (error) {
          }
    };




          return (
            <div className="create-container container-fluid">
              <h3>{editId ? "Edit Post" : "Create a New Lifestyle Post"}</h3>
              {success && <p>Post {editId ? "updated" : "created"} successfully!</p>}

        
              <form onSubmit={handleSubmit}>
              <div>
                  <label>Page Title:</label>
                  <input
                    type="text"
                    name="pageTitle"
                    value={formData.pageTitle}
                    onChange={handleChange}

                  />
                </div>
                <div>
                  <label>Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
        
                <div>
                  <label>Category:</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>
        
                <div>
                  <label>Paragraphs:</label>
                  <textarea
                    name="paragraphs"
                    value={formData.paragraphs}
                    onChange={handleChange}
                    required
                  />
                </div>
        
                <button className="create_button" type="submit">
                  {editId ? "Update Post" : "Add Post"}
                </button>
               
              </form>

               {/* Displaying the list of posts */}
            <div className="posts-list">
                {posts.length === 0 ? (
                    <p>No posts available</p>
                ) : (
                    <ul>
                        {posts.map((post, index) => (
                            <li className="added-posts-list" key={index}>
                                <h5>Page Title: {post.pageTitle}</h5>
                                <p><strong>Title:</strong> {post.title}</p>
                                <p><strong>Category:</strong> {post.category}</p>
                                <p><strong>Paragraphs:</strong> {post.paragraphs}</p>
                                <span>
                                <button className="new_post_button_edit" onClick={() => handleEdit(post)}>Edit</button> {"       "}
                                <button className="new_post_button_delete" onClick={() => handleDelete(post.id)}>Delete</button>
                                </span>
                            </li>
                        ))}
                    </ul>
      
                )}
            </div>
        </div>
          );
        };
        
        export default CreatePost;