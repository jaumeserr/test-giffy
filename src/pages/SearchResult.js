import { useEffect, useState } from "react";
import Gif from "../components/Gif";
import ListOfGifs from "../components/ListOfGifs";
import getGifs from "../services/getGifs";

const SearchResult = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = params;

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  return (
    <>
      {loading
        ? <div>Loading...</div>
        : <ListOfGifs gifs={gifs} />
      }
    </>
  )
};

export default SearchResult;
