import { useDispatch, useSelector } from "react-redux";
import { authApi, useLoginMutation } from "../services/authApi";
import { useState } from "react";
import { setEmail, setPassword } from "../reducer/slices/loginSlice";
import blogLogo from "../assets/images/blog.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { email, password } = useSelector((state) => state.login);
  const [login, { isLoading }] = useLoginMutation();

  const { user, token } = useSelector((state) => state.auth);
  const isMember = user && user.role === "member";
  const navigate = useNavigate();

  if (token && !user) {
    dispatch(authApi.endpoints.getUser.initiate(token, { forceRefetch: true }));
  }

  if (token && user) {
    return <Navigate to={isMember ? "/" : "/dashboard"} />;
  }

  const action = {
    email: setEmail,
    password: setPassword,
  };

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });

    return dispatch(action[e.target.name](e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!email) validationErrors.email = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = { email, password };

    login(data)
      .unwrap()
      .then(() => {
        navigate(isMember ? '/' : '/dashboard');
      })
      .catch(({ data }) => {
        setErrors({ ...errors, login: data?.message });
      });
  };

  return !token && !user ? (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </HelmetProvider>
      <div className="container sm:flex sm:items-center md:max-w-full md:p-10 lg:p-0 mx-auto h-screen">
        <div className="h-full w-full flex align-bottom flex-col sm:flex-row sm:rounded-md sm:shadow-md sm:h-3/4 bg-blue-700 md:h-3/4 md:bg-slate-50 md:rounded-xl sm:overflow-hidden md:shadow-xl lg:h-full xl:h-full lg:rounded-none">
          <div className="h-1/2 p-5 flex w-full justify-center bg-blue-700 sm:h-full sm:w-full sm:justify-normal">
            <div className="flex justify-center items-center">
              <img src={blogLogo} alt="blog img" className="h-fit lg:w-3/4"/>
            </div>
          </div>
          <div className="py-7 px-5 w-full h-4/6 bg-slate-50 rounded-t-3xl mt-auto sm:p-6 sm:w-5/6 sm:h-full sm:justify-center sm:rounded-none sm:flex md:w-4/6 md:h-full md:m-0 md:p-6 sm:flex-col md:justify-center lg:px-8">
            <h1 className="text-4xl font-semibold text-blue-700 lg:text-5xl mb-2">
              Login
            </h1>
            <form
              action=""
              className="mt-5 flex flex-col gap-3 sm:justify-center sm:gap-2 md:gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <label
                  htmlFor="email"
                  className="font-medium text-sm text-slate-600 lg:text-[1rem] after:content-['*'] after:text-red-600 after:ml-1"
                >
                  Your email
                </label>
                <div className="relative flex flex-col">
                  <HiOutlineMail
                    className="absolute text-slate-400 left-3 mt-0.5 top-4 lg:top-5"
                    size={"1.2rem"}
                  />
                  <div>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      maxLength={30}
                      spellCheck={false}
                      placeholder="example@gmail.com"
                      className={`ps-9 py-3 outline-none border ${
                        errors.email && "border-red-600"
                      } rounded w-full text-sm block mt-1 lg:text-[1rem] lg:py-4 lg:shadow-sm focus:border-blue-700 focus:ring-1 invalid:border-red-600 peer invalid:focus:border-red-600 invalid:focus:ring-0`}
                      onChange={handleChange}
                    />
                    <p className="text-red-600 text-sm mt-0.5 lg:text-md hidden peer-invalid:block">
                      Email is not valid
                    </p>
                  </div>
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="font-medium text-sm lg:text-md lg:text-[1rem] text-slate-600 after:content-['*'] after:text-red-600 after:ml-1"
                >
                  Password
                </label>
                <div className="relative flex items-center group">
                  <FaLock className="absolute left-3 text-slate-400 group-focus:text-blue-700" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    spellCheck={false}
                    className={`w-full border ${
                      errors.password && "border-red-600"
                    } rounded ps-9 py-3 outline-none text-sm block mt-1 focus:border-blue-700 focus:ring-1 lg:text-md lg:py-4 lg:shadow-sm lg:text-[1rem]`}
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <IoEyeOutline
                      className="absolute text-blue-800 right-3 mt-1 cursor-pointer"
                      size={"1.5rem"}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute text-slate-500 right-3 mt-1 cursor-pointer"
                      size={"1.5rem"}
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                    {errors.password}
                  </p>
                )}
              </div>

              {errors.login && (
                <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                  {errors.login}
                </p>
              )}
              <div className="flex justify-between items-center mb-2">
                <button
                  disabled={isLoading}
                  type="submit"
                  className={`w-fit font-semibold py-2 rounded-lg block text-white active:ring sm:py-2 sm:text-sm lg:text-base lg:py-3 ${
                    isLoading ? "bg-blue-500 px-3" : "bg-blue-700 px-7"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-blue-600" />
                      <div className="ml-2">Loading...</div>
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
                <div>
                  <a
                    href="#"
                    className="underline font-semibold text-blue-400 text-xs lg:text-sm"
                  >
                    Forgot password ?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h1>Redirecting...</h1>
  );
};
