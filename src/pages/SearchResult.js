import { useEffect, useState } from "react";
import Gif from "../components/Gif";
import getGifs from "../services/getGifs";

const SearchResult = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)
  const { keyword } = params;

  useEffect(function (){
    setLoading(true)
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
      });
  }, [keyword]);

  if(loading) return <div>Loading...</div>

  return (
    <div>
      {gifs.map(({ url, id, title }) => (
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      ))}
      ;
    </div>
  );
};

export default SearchResult;
