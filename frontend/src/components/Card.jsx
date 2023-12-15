import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

export const Card = ({user}) => {
  return (
    <div className="rounded-lg cursor-pointer border md:rounded-xl shadow-md overflow-hidden flex flex-col bg-white sm:mb-0 hover:scale-105 hover:shadow-lg transition-all group">
      <div className="w-full bg-gray-400">
        <img
          src="https://source.unsplash.com/300x300"
          alt="Post"
          className="w-full object-contain"
        />
      </div>
      <div className="px-2 py-3 xs:p-3 text-left">
        <div className="mb-2">
          <p className="text-[9px] font-bold text-blue-700 tracking-tight md:text-[10px] lg:text-[12px]">
            Author name
          </p>
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-xs lg:text-sm xl:text-base tracking-tight mb-3 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
        </div>
        <div className="flex justify-between">
          <div className="flex text-slate-400 items-center gap-1">
            <FaRegEye />
            <span className="text-[11px] mt-0.5">1.3k views</span>
          </div>
          {user && <IoBookmarkOutline size={"1.3rem"} className="text-indigo-500" /> }
        </div>
      </div>
    </div>
  );
};
