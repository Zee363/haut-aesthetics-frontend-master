import React, { useState} from "react";
import "../pages/CreatePost.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subTitle, setSubTitle] = useState("")
    const [paragraphs, setParagraphs] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData ={
            title,
            category,
            paragraphs
        };

        try {
            const response = await fetch("http://localhost:5000/api/beauty/:id", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });
                

            if (!response.ok) {
                throw new Error("Failed to create post");
              }
        
              setSuccess(true);
              setTitle("");
              setCategory("");
              setParagraphs([]);
              setSubTitle("");
            } catch (error) {
              setError(error.message);
            }
          };

          return (
            <div className="create-container container-fluid">
              <h3>Create a New Lifestyle Post</h3>
              {success && <p>Post created successfully!</p>}
              {error && <p>Error: {error}</p>}
        
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Title:</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
        
                <div>
                  <label>Category:</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>
        
                <div>
                  <label>Paragraphs:</label>
                  <textarea
                    value={paragraphs}
                    onChange={(e) => setParagraphs(e.target.value)}
                    required
                  />
                </div>
        
                <div>
                  <label>SubTitle:</label>
                  <textarea
                    type="text"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}

                  />
                </div>
        
                <button type="submit">Create Post</button>
               
              </form>
            </div>
          );
        };
        
        export default CreatePost;