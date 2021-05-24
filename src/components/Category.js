import { Link } from "wouter";

const Category = ({ options }) => {
  return (
    <>
      <ul>
        {options.map((option) => (
          <li>
            <Link to={`/search/${option}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
