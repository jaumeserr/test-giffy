// import { useContext } from "react";
import Gif from "../components/Gif";

// import GifsContext from "../context/GifsContext";
import useGlobalGifs from "../hooks/useGlobalGifs";

const Detail = ({ params }) => {
  
  // recuperamos los gifs del contexto
  //const gifsContext = useContext(GifsContext)
  // const { gifs } = useContext(GifsContext)
  // console.log({ gifs })

  // recuperamos los gifs del custom hook 'useGlobalGifs'
  const gifs = useGlobalGifs();

  const gif = gifs.find(singleGif => singleGif.id === params.id)
  // destructuramos el objeto 'gif'
  // const { id, title, url } = gif

  // destructuramos todo el objeto 'gif' y lo pasamos entero por props
  return <Gif {...gif}/>
  // return <Gif id={id} url={url} title={title} />
};

export default Detail;
