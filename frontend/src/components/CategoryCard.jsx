/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const CategoryCard = ({name, to, icon}) => {
  return (
    <Link to={to} className="bg-white shadow-lg p-2 lg:py-3 rounded-md flex items-center gap-1 sm:gap-2 hover:scale-105 transition-all hover:shadow-xl">
      <div className="max-w-[50px] w-[35px]">
        <img
          src={`http://localhost:8000/storage/${icon}`}
          alt="category-icon"
          className="rounded-full object-cover"
        />
      </div>
      <div className="text-xs sm:text-sm">{name}</div>
    </Link>
  );
};
