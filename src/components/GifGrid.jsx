import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map((image) => (
          <li key={image.id}>
            {image.title}
            <img src={image.url} alt={`img_${image.title}`} />
          </li>
        ))}
      </ol>
    </>
  );
};
