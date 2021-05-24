import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";

const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h3>{`Gifs of ${decodeURI(keyword).toUpperCase()}`}</h3>
          <ListOfGifs gifs={gifs} />
        </>
      )}
    </>
  );
};

export default SearchResult;