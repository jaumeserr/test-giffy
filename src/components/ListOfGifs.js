import { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

const ListOfGifs = ({ keyword }) => {
  // ORIGINAL USESTATE STRUCTURE
  // const state = useState([])
  // const value = state[0]
  // const updateValue = state[1]
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
      .then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ url, id, title }) => (
    <Gif id={id} key={id} title={title} url={url} />
  ));
};

export default ListOfGifs;
