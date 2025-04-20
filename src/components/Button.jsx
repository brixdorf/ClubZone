import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="bg-white font-[Montserrat] text-2xl font-medium p-5 rounded hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default Button;
