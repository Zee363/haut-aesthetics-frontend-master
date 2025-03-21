import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../pages/Fashion.css";

const FashionPost = () => {
    const { id } = useParams();
    const [FashionPost, setFashionPost] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchFashionPost = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}//api/fashion/${id}`);
                    if (!response.ok) {
                        throw new Error("Network has trouble connection");
                    }
                    const result = await response.json();
                    console.log("Fetched post:", result);
                    setFashionPost(result);
                    setLoading(false);
                }  catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
    
            fetchFashionPost();
            
        }, [id]);

        const insertPostIntoDatabase = async () => {
                  try {
                      // Make the POST request with the id included in the URL
                      const response = await fetch(`${process.env.REACT_APP_FRONTEND_LOCAL_URL}//api/fashion`, {
                          method: "POST",
                          headers: {
                              "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                             pageTitle: FashionPost.pageTitle,
                             title: FashionPost.title,
                             category: FashionPost.category, 
                              paragraphs: FashionPost.paragraphs,
                              images: FashionPost.images      
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
                  if (FashionPost) {
                      insertPostIntoDatabase(); // Insert post into the database
                  }
              }, [FashionPost]);
    
        if (loading) return <p>Loading</p>;
        if (error) return <p>Error: {error}</p>;
    
        return (
            <div className="post">
              <h1>{FashionPost?.title}</h1>
              <h2>{FashionPost?.category}</h2>
        
              {/* Render paragraphs */}
              {FashionPost?.paragraphs &&
                FashionPost?.paragraphs.map((paragraph, index) => (
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
              <div className="images" style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
                {FashionPost?.images &&
                 FashionPost?.images.map((image, index) => (
                    <img key={index} src={image} alt={`image-${index}`} style={{ width: '230px', height: 'auto' }}/>
                  ))}
              </div>
            </div>
          );
    
    }

    export default FashionPost;