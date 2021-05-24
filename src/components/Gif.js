import { Link } from 'wouter';

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${id}`}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      <h5>{id}</h5>
    </Link>
  );
};

export default Gif;
