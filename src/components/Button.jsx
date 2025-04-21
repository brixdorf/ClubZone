import { Link } from "react-router-dom";

const Button = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="bg-white font-[Montserrat] text-lg sm:text-xl md:text-2xl font-medium p-3 sm:p-4 md:p-5 rounded hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out inline-block"
    >
      {text}
    </Link>
  );
};

export default Button;
