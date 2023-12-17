import { BiSolidCategory, BiSolidUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="sticky top-0 h-screen w-fit p-3 flex flex-col items-center border-r">
      <div className="text-blue-600 font-semibold mb-5 text-xl">
        <h1>M</h1>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        {user?.role === "admin" && (
          <Link className="text-blue-600">
            <BiSolidUser size={"1.5rem"} />
          </Link>
        )}
        <Link to={"/dashboard/category"} className="text-blue-600">
          <BiSolidCategory size={"1.5rem"} />
        </Link>
      </div>
    </div>
  );
};
