import Gif from "../components/Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div>
      {gifs.map(({ url, id, title }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default ListOfGifs;
