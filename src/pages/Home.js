/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs";
import TrendingSearches from "../components/TrendingSearches";
import useGifs from "../hooks/useGifs";

const POPULAR_GIFS = ["Panda", "Cats", "Dogs", "Bears"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const {loading, gifs} = useGifs()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search a gif here ..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <button>Buscar</button>
      </form>
      <ListOfGifs gifs={gifs} />
      <h3>Los gifs más populares</h3>
      <TrendingSearches />
    </>
  );
};

export default Home;
