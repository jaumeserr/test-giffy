import { Link } from "wouter";

const Category = ({ options }) => {
  return (
    <>
      <ul>
        {options.map((option, index) => (
          <li key={`${option}${index}`}>
            <Link to={`/search/${option}`}>{option}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Category;
