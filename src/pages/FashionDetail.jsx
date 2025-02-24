import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const FashionPost = () => {
    const { id } = useParams();
    const [FashionPost, setFashionPost] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchFashionPost = async () => {
                try {
                    const response = await fetch(`http://localhost:5000/api/fashion/${id}`);
                    if (!response.ok) {
                        throw new Error("Network has trouble connection");
                    }
                    const result = await response.json();
                    setFashionPost(result);
                    setLoading(false);
                }  catch (error) {
                    setError(error.message);
                    setLoading(false);
                }
            };
    
            fetchFashionPost();
            
        }, [id]);
    
        if (loading) return <p>Loading</p>;
        if (error) return <p>Error: {error}</p>;
    
        return (
            <div>
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
              <div className="images">
                {FashionPost?.images &&
                 FashionPost?.images.map((image, index) => (
                    <img key={index} src={image} alt={`image-${index}`} />
                  ))}
              </div>
            </div>
          );
    
    }

    export default FashionPost;