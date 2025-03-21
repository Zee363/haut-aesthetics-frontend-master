import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../pages/Lifestyle.css";

const LifestylePost = () => {
    const { id } = useParams();
    const [LifestylePost, setLifestylePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLifestylePost = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}/api/lifestyle/${id}`);
                
                if (!response.ok) {
                    throw new Error("Network has trouble connection");
                }
                const result = await response.json();
                console.log("Fetched post:", result);
                setLifestylePost(result);
                setLoading(false);
            }  catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchLifestylePost();
      }, [id]);

      const insertPostIntoDatabase = async () => {
                try {
                    // Make the POST request with the id included in the URL
                    const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}/api/lifestyle`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                           pageTitle: LifestylePost.pageTitle,
                           title: LifestylePost.title,
                           category: LifestylePost.category, 
                            paragraphs: LifestylePost.paragraphs,
                            images: LifestylePost.images      
                        }),
                    });
        
      
                    if (!response.ok) {
                        throw new Error("Failed to insert post into the database");
                    }
        
                    const result = await response.json();
                    console.log("Post inserted successfully:", result);
                } catch (error) {
                    console.error("Error inserting post:", error);
                }
            };
        
            useEffect(() => {
                if (LifestylePost) {
                    insertPostIntoDatabase(); // Insert post into the database
                }
            }, [LifestylePost]);

    if (loading) return <p>Loading</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="post">
          <h1>{LifestylePost?.title}</h1>
          <h2>{LifestylePost?.category}</h2>
    
          {/* Render paragraphs */}
          {LifestylePost?.paragraphs &&
            LifestylePost?.paragraphs.map((paragraph, index) => (
              <div key={index}>
                {typeof paragraph === "string" ? (
                  <p>{paragraph}</p>
                ) : (
                  <>
                    <h3>{paragraph.subTitle}</h3>
                    <p>{paragraph.content}</p>
                  </>
                )}
              </div>
            ))}
    
          {/* Render images */}
          <div className="images" style={{ display: 'flex', gap: '90px', flexWrap: 'wrap' }}>
            {LifestylePost?.images &&
              LifestylePost?.images.map((image, index) => (
                <img key={index} src={image} alt={`image-${index}`} style={{ width: '230px', height: 'auto', display: 'center' }} />
              ))}
          </div>
        </div>
      );

}

export default LifestylePost;