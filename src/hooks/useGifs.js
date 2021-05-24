import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifContext from '../context/GifsContext';

const useGifs = ({ keyword } = { keyword: null }) => {
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);

      // recuperamos la keyword del localStorage
      //const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

      getGifs({ keyword: keywordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      });
    }, [keyword, setGifs]);

  return { loading, gifs };
};

export default useGifs;
