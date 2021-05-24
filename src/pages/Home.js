import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs";
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
      <h3>Última búsqueda: {keyword}</h3>
      <ListOfGifs gifs={gifs} />
      <h3>Los gifs más populares</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
