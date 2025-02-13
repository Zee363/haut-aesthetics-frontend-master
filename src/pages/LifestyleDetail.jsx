import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const LifestyleDetail = () => {
    const { id } = useParams();
    const [lifestylePost, setLifestylePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLifestylePost = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/lifestyle/${id}`);
                if (!response.ok) {
                    throw new Error("Network has trouble connection");
                }
                const result = await response.json();
                setLifestylePost(result);
                setLoading(false);
            }  catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchLifestylePost();

    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
          <h1>{lifestylePost?.title}</h1>
          <h2>{lifestylePost?.category}</h2>
    
          {/* Render paragraphs */}
          {lifestylePost?.paragraphs &&
            lifestylePost?.paragraphs.map((paragraph, index) => (
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
            {lifestylePost?.images.map((image, index) => (
                <img key={index} src={image} alt={`image-${index}`} />
              ))}
          </div>
        </div>
      );

}

export default LifestyleDetail;