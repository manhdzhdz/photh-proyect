import { useState } from "react";
import { useEffect } from "react";
import "./Photo.css"

function Photo(){
  const [photos, setPhotos] = useState();

  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      })
      .catch(() => {
        console.error("La petición no funciona!!");
      });
  }, []);

 if (!photos) return <span>Cargando!!!</span>;

 return (
    <>
      <h1>LISTA DE CRIPTO MONEDAcontainer-photoS</h1>
      <div className="container-photo">
      {photos.map(({ author, download_url }) => (
        <div>
            Autor {author}
            Descarga {download_url}
        </div>

        ))}


      </div>
    </>
  );
};
export default Photo;
