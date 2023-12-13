import { useSelector } from "react-redux";
import { useState } from "react";
import searchIcon from "../assets/images/search-icon.svg";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <div className=" shadow-md border border-gray-200 bg-white py-2 sticky top-0 md:py-3 sm:px-0">
      <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] mx-auto">
        <nav className="w-full">
          <div className="flex items-center justify-between">
            {/* ------------------------------ NAVBAR BRAND ------------------------------ */}
            <div className="flex items-center gap-2">
              <a
                className="text-md font-bold tracking-wider text-blue-700"
                href=""
              >
                MADISCHOOL
              </a>
            </div>
            {/* ------------------------------ NAVBAR BRAND ------------------------------ */}

            <div className="flex items-center justify-between">
              {/* -------------------------------- SEARCH IN PHONE ------------------------------- */}
              <div
                className="w-6 font-semibold sm:hidden group cursor-pointer mr-3"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <img
                  src={searchIcon}
                  alt="search-icon"
                  className="object-cover group-hover:brightness-75"
                />
              </div>

              {/* -------------------------------- SEARCH IN PHONE ------------------------------- */}

              {/* -------------------------------- HAMBURGER ------------------------------- */}
              <div
                className={`h-full w-10 border border-gray-300 rounded-lg p-2.5 flex flex-col gap-1 shadow=sm sm:hidden cursor-pointer ${
                  open && "bg-blue-600"
                }`}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={`w-full h-[3px] ${
                    open ? "bg-slate-100" : "bg-gray-600"
                  }`}
                ></span>
                <span
                  className={`w-full h-[3px] ${
                    open ? "bg-slate-100" : "bg-gray-600"
                  }`}
                ></span>
                <span
                  className={`w-full h-[3px] ${
                    open ? "bg-slate-100" : "bg-gray-600"
                  }`}
                ></span>
              </div>
              {/* -------------------------------- HAMBURGER ------------------------------- */}

              {/* ------------------------------- NAVBAR LINK ------------------------------ */}
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
              {/* ------------------------------- NAVBAR LINK ------------------------------ */}

              {/* ------------------------------- SEARCH BAR ------------------------------- */}
              <div>
                <label
                  htmlFor="search"
                  className="relative before:top-50 before:right-3 before:bottom-0 before:absolute before:w-5 before:bg-no-repeat before:bg-contain before:h-5/6 before:bg-[url('../assets/images/search-icon.svg')] bg-cover bg-center rotate-90 h-full"
                >
                  <input
                    type="text"
                    id="search"
                    spellCheck={false}
                    placeholder="Cari"
                    className="hidden sm:block border py-1.5 px-2 rounded-md focus:outline-none text-sm shadow-sm lg:w-56"
                  />
                </label>
              </div>
              {/* ------------------------------- SEARCH BAR ------------------------------- */}

              <div className="relative hidden sm:block">
                {user ? (
                  <div className="rounded-full overflow-hidden border-2 p-0.5 border-blue-700 cursor-pointer group">
                    <img
                      src="https://source.unsplash.com/35x35"
                      alt="profile-picture"
                      className="object-cover rounded-full group-hover:brightness-90 transition-all"
                    />
                  </div>
                ) : (
                  <button className="text-sm font-semibold text-blue-600 bg-blue-200 py-1.5 px-2 rounded-md hover:bg-blue-600 hover:text-white">
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ------------------------- DROPDOWN ON PHONE SIZE ------------------------- */}
          <div
            className={`w-3/4 xs:w-3/5 ${
              !open && "hidden"
            } mt-3 sm:hidden absolute border rounded-lg shadow p-2 bg-white right-7`}
          >
            <div className="flex flex-col gap-1">
              {user ? (
                /* --------------------- DROPDOWN IF USER HAS LOGGED IN --------------------- */
                <div className="flex items-center justify-between gap-2 bg-gray-100 p-3 rounded-lg shadow-sm mb-3">
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
                /* --------------------- DROPDOWN IF USER HAS LOGGED IN --------------------- */
                /* --------------------- DROPDOWN IF USER NOT LOGGED IN --------------------- */
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
                /* --------------------- DROPDOWN IF USER NOT LOGGED IN --------------------- */
              )}
              <a
                href=""
                className=" p-2 text-sm rounded-md bg-blue-600 text-white font-semibold tracking-wide"
              >
                Home
              </a>
              <a
                href=""
                className=" p-2 text-sm rounded-md font-base tracking-wide"
              >
                Category
              </a>
            </div>
          </div>
          {/* ------------------------- DROPDOWN ON PHONE SIZE ------------------------- */}

          {/* ------------------------- SEARCH BAR ON PHONE SIZE ------------------------- */}
          <div
            className={`${
              searchOpen ? "block" : "hidden"
            } sm:hidden absolute mt-4 right-7 bg-white p-3 rounded-md shadow border w-3/4 flex xs:w-3/5`}
          >
            <input
              type="text"
              id="search"
              spellCheck={false}
              placeholder="Cari"
              className=" border w-full py-2 px-2 rounded-md focus:outline-none text-sm shadow-lg"
            />
            <button className="text-sm text-white  bg-blue-700 px-3 rounded-md ms-1">
              Cari
            </button>
          </div>
          {/* ------------------------- SEARCH BAR ON PHONE SIZE ------------------------- */}
        </nav>
      </div>
    </div>
  );
};
