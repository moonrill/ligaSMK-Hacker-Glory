import { useState } from "react";
import searchIcon from "../assets/images/search-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { LuUser2 } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { useLogoutMutation } from "../services/authApi";
import { useSelector } from "react-redux";

export const Navbar = ({ getUserData }) => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(token)
      .unwrap()
      .then(() => navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" shadow-sm border border-gray-200 bg-white py-2 sticky top-0 md:py-3 sm:px-0 z-50">
      <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] mx-auto">
        <nav className="w-full relative">
          <div className="flex items-center justify-between">
            {/* ------------------------------ NAVBAR BRAND ------------------------------ */}
            <div className="flex items-center gap-2">
              <Link
                className="text-md font-bold tracking-wider text-blue-700"
                to={"/"}
              >
                MADISCHOOL
              </Link>
            </div>
            {/* ------------------------------ NAVBAR BRAND ------------------------------ */}

            <div className="flex items-center justify-between sm:gap-2 md:gap-3 lg:gap-4">
              {/* -------------------------------- SEARCH IN PHONE ------------------------------- */}
              <div
                className="w-6 font-semibold md:hidden group cursor-pointer mr-3"
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
                className={`h-full w-10 border border-gray-300 rounded-lg p-2.5 flex flex-col gap-1 shadow-sm md:hidden cursor-pointer ${
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
              <ul className="hidden md:flex sm:items-center sm:gap-3 md:gap-4">
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
                    className="hidden md:block border py-1.5 px-2 rounded-md focus:outline-none text-sm shadow-sm lg:w-56"
                  />
                </label>
              </div>
              {/* ------------------------------- SEARCH BAR ------------------------------- */}

              <div className="relative hidden md:block">
                {user ? (
                  <div
                    className="rounded-full overflow-hidden border-2 p-0.5 border-blue-700 cursor-pointer group"
                    onClick={() => setProfileOpen(!profileOpen)}
                  >
                    <img
                      src="https://source.unsplash.com/35x35"
                      alt="profile-picture"
                      className="object-cover rounded-full group-hover:brightness-90 transition-all"
                    />
                  </div>
                ) : getUserData ? (
                  <p className="text-sm text-blue-700">Loading...</p>
                ) : (
                  <Link
                    to={"/login"}
                    className="text-sm font-semibold text-blue-600 py-2 px-3 rounded-md hover:underline"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ------------------------- DROPDOWN ON PHONE SIZE ------------------------- */}
          <div
            className={`w-3/4 sm:w-4/6 ${
              !open && "hidden"
            } mt-3 md:hidden absolute border rounded-lg shadow p-2 bg-white right-0 z-10`}
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
                  <div
                    onClick={() => handleLogout()}
                    className="text-sm text-red-700 border border-red-600 py-1.5 px-2 rounded-md"
                  >
                    {isLoading ? "Logging out..." : "Logout"}
                  </div>
                </div>
              ) : getUserData ? (
                <p className="text-sm text-blue-700">Loading...</p>
              ) : (
                /* --------------------- DROPDOWN IF USER HAS LOGGED IN --------------------- */
                /* --------------------- DROPDOWN IF USER NOT LOGGED IN --------------------- */
                <div className="flex items-center gap-2 bg-gray-100 p-2 justify-between rounded-lg shadow-sm mb-3">
                  <Link
                    to={"/login"}
                    className="text-sm text-blue-600 border border-blue-600 py-1.5 px-2 rounded-md hover:bg-blue-600 hover:text-white"
                  >
                    Login
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-fit">
                      <img
                        src="https://source.unsplash.com/35x35"
                        alt="profile-picture"
                        className="object-cover"
                      />
                    </div>
                  </div>
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
            } md:hidden absolute mt-3 right-0 bg-white p-3 rounded-md shadow border w-3/4 flex sm:w-4/6`}
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

          {/* ------------------------------ DROPDOWN USER ----------------------------- */}
          <div
            className={`absolute hidden w-64 bg-white p-3 mt-3 border rounded-md shadow text-xs right-0 lg:text-sm ${
              profileOpen && "md:flex"
            } flex-col gap-1 z-10`}
          >
            <Link className="overflow-hidden flex gap-2 rounded-md cursor-pointer">
              <div>
                <img
                  src="https://source.unsplash.com/35x35"
                  alt="profile-picture"
                  className="object-cover rounded-full border"
                />
              </div>
              <div>
                <h1 className="font-semibold">{user?.username}</h1>
                <h1 className="text-slate-500">{user?.email}</h1>
              </div>
            </Link>
            <Link className="p-2 rounded-md hover:bg-blue-50 cursor-pointer mt-1 border">
              <div className="flex items-center gap-1.5">
                <LuUser2 size={"1rem"} />
                Your profile
              </div>
            </Link>
            <Link className="p-2 rounded-md hover:bg-blue-50 cursor-pointer border">
              <div className="flex items-center gap-1.5">
                <IoBookmarkOutline size={"1rem"} />
                Saved post
              </div>
            </Link>
            <div
              onClick={() => handleLogout()}
              className="p-2 rounded-md hover:bg-red-50 cursor-pointer border"
            >
              <div className="text-red-600 flex items-center gap-1.5">
                <HiOutlineLogout size={"1.1rem"} />
                {isLoading ? "Logging out..." : "Logout"}
              </div>
            </div>
          </div>
          {/* ------------------------------ DROPDOWN USER ----------------------------- */}
        </nav>
      </div>
    </div>
  );
};
