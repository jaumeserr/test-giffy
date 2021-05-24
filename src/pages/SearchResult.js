import ListOfGifs from "../components/ListOfGifs";
import useGifs from "../hooks/useGifs";

const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword })

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
