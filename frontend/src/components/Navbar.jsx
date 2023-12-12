import { useSelector } from "react-redux";
import {useState} from 'react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  return (
    <nav className="w-full p-2 sticky top-0 backdrop-blur-md shadow-sm border border-gray-200 sm:px-5 md:px-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`h-full w-10 border border-gray-300 rounded-lg p-2.5 flex flex-col gap-1 shadow=sm sm:hidden cursor-pointer ${open && 'bg-blue-600'}`} onClick={() => setOpen(!open)}>
            <span className={`w-full h-[3px] ${open ? 'bg-slate-100' : 'bg-gray-600'}`}></span>
            <span className={`w-full h-[3px] ${open ? 'bg-slate-100' : 'bg-gray-600'}`}></span>
            <span className={`w-full h-[3px] ${open ? 'bg-slate-100' : 'bg-gray-600'}`}></span>
          </div>
          <a className="text-md font-bold tracking-wider text-blue-700" href="">
            MADISCHOOL
          </a>
        </div>
        <div className="flex items-center justify-between ">
          <ul className="hidden sm:flex sm:items-center sm:gap-3 md:gap-4">
            <li>
              <a href="#" className="text-blue-800 font-semibold text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="text-sm">
                Home
              </a>
            </li>
          </ul>
          <div className="ml-3">
            <label htmlFor="search" className="relative before:top-50 before:right-3 before:bottom-0 before:absolute before:w-5 before:bg-no-repeat before:bg-contain before:h-5/6 before:bg-[url('../assets/images/search-icon.svg')] bg-cover bg-center rotate-90 h-full">
            <input
              type="text"
              id="search"
              spellCheck={false}
              placeholder="Cari"
              className="border py-1.5 px-2 rounded-md focus:outline-none text-sm shadow-sm"
            />

            </label>
          </div>

          {!user ? (
            <button
              type="button"
              className="bg-blue-700 px-4 font-semibold rounded-md text-white sm:py-2 sm:text-sm"
            >
              Login
            </button>
          ) : (
            <div className="bg-gray-500 rounded-full overflow-hidden"></div>
          )}
        </div>
      </div>

      <div className={`w-3/4 ${!open && 'hidden'} mt-3 sm:hidden absolute border rounded-md shadow p-2`}>
        <div className="flex flex-col gap-1">
          {user ? (
            <div className="flex items-center justify-between gap-2 bg-gray-100 p-2 rounded-lg shadow-sm mb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden w-fit">
                  <img
                    src="https://source.unsplash.com/35x35"
                    alt="profile-picture"
                    className="object-cover"
                  />
                </div>
                <div className="text-sm">{user.username}</div>
              </div>
              <button className="text-sm text-red-700 border border-red-600 py-1.5 px-2 rounded-md">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg shadow-sm mb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden w-fit">
                  <img
                    src="https://source.unsplash.com/35x35"
                    alt="profile-picture"
                    className="object-cover"
                  />
                </div>
              </div>
              <button className="text-sm text-blue-600 border border-blue-600 py-1.5 px-2 rounded-md hover:bg-blue-600 hover:text-white">
                Login
              </button>
            </div>
          )}
          <a href="" className=" p-2 text-sm rounded-md bg-blue-600 text-white font-semibold tracking-wide">
            Home
          </a>
          <a href="" className=" p-2 text-sm rounded-md font-base tracking-wide">
            Category
          </a>
        </div>
      </div>
    </nav>
  );
};
