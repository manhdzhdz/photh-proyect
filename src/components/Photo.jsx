import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Photo.css";

function Photo() {
  const [photos, setPhotos] = useState();

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API_URL}list`)
      
      .then((data) => {
        // console.log(data);
        setPhotos(data.data);
      })
      .catch(() => {
        console.error("La petición no funciona!!");
      });
  }, []);

  if (!photos) return <span>Cargando!!!</span>;

  return (
    <>
      <h1>FOTOS MARAVILLOSO </h1>
      <div className="container-photo">
        {photos.map(({ id, author, download_url }) => (
          <div key={id}>
            Autor {author}
            Descarga {download_url}
          </div>
        ))}
      </div>
    </>
  );
}
export default Photo;
