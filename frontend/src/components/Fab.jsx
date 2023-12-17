import { FaPlus } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Fab = ({ icon, text, onClick, className }) => {
  const defaultIcon = <FaPlus />;
  const defaultStyle =
    "bg-blue-700 hover:bg-blue-500 text-white p-4 rounded-full shadow-md focus:ring-4 focus:ring-blue-300";

  return (
    <button
      className={`flex items-center fixed bottom-4 right-4 group ${defaultStyle} ${
        className || ""
      }`}
      onClick={onClick}
    >
      <div>{icon || defaultIcon}</div>
      {text && (
        <span
          className={`ml-2 text-xs hidden transition-all group-hover:block`}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Fab;
