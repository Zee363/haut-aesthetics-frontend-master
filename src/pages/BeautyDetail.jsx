import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../pages/Beauty.css";

const BeautyPost = () => {
    const { id } = useParams();
    const [beautyPost, setbeautyPost] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchBeautyPost = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/beauty/${id}`);

                    if (!response.ok) {
                        throw new Error("Network has trouble connection");
                    }
                    const result = await response.json();
                    console.log("Fetched post:", result);
                    setbeautyPost(result);
                    setLoading(false);
                }  catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
    
            fetchBeautyPost();
            
        }, [id]);
    
        const insertPostIntoDatabase = async () => {
          try {
              // Make the POST request with the id included in the URL
              const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}api/beauty`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                     pageTitle: beautyPost.pageTitle,
                     title: beautyPost.title,
                     category: beautyPost.category, 
                      paragraphs: beautyPost.paragraphs,
                      images: beautyPost.images      
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
          if (beautyPost) {
              insertPostIntoDatabase(); // Insert post into the database
          }
      }, [beautyPost]);

        if (loading) return <p>Loading</p>;
        if (error) return <p>Error: {error}</p>;
    
        return (
            <div className="post">
              <h1>{beautyPost?.title}</h1>
              <h2>{beautyPost?.category}</h2>
        
              {/* Render paragraphs */}
              {beautyPost?.paragraphs &&
                beautyPost?.paragraphs.map((paragraph, index) => (
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
                {beautyPost?.images &&
                  beautyPost?.images.map((image, index) => (
                    <img key={index} src={image} alt={`image-${index}`} style={{ width: '230px', height: 'auto' }}/>
                  ))}
              </div>
            </div>
          );
    
    }

    export default BeautyPost;