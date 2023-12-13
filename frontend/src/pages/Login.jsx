import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../services/authApi";
import { useState } from "react";
import { setEmail, setPassword } from "../reducer/slices/loginSlice";
import blogLogo from "../assets/images/blog.svg";
import { setToken } from "../reducer/slices/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { email, password } = useSelector((state) => state.login);
  const [login, { isLoading }] = useLoginMutation();

  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = user && token;
  const isMember = user && user.role === "member";
  const navigate = useNavigate();

  // Check first if user has logged in and the role is not member
  if (isAuthenticated) {
    return <Navigate to={isMember ? "/" : "/dashboard"}/>
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
      .then((res) => {
        dispatch(setToken(res));
        navigate(isMember ? "/" : "/dashboard");
      })
      .catch(({ data }) => {
        setErrors({ ...errors, login: data?.message });
      });
  };

  return (
    <div className="container sm:flex sm:items-center md:max-w-full md:p-10 lg:p-0 mx-auto h-screen">
      <div className="h-full w-full flex align-bottom flex-col sm:flex-row sm:rounded-md sm:shadow-md sm:h-3/4 bg-blue-700 md:h-full md:bg-slate-50 md:rounded-xl sm:overflow-hidden md:shadow-xl lg:h-full xl:h-full lg:rounded-none">
        <div className="h-1/2 p-5 flex w-full justify-center bg-blue-700 sm:h-full sm:w-full sm:justify-normal">
          <div className="flex justify-center items-center max-w-sm sm:justify-start sm:items-start sm:p-6">
            <img src={blogLogo} alt="blog img" className="h-fit" />
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
              <input
                id="email"
                type="email"
                name="email"
                maxLength={30}
                spellCheck={false}
                placeholder="example@gmail.com"
                className={`p-3 outline-none border ${
                  errors.email && "border-red-600"
                } rounded w-full text-sm block mt-1 lg:text-[1rem] lg:p-4 lg:shadow-sm focus:border-blue-700 focus:ring-1 invalid:border-red-600 peer invalid:focus:border-red-600 invalid:focus:ring-0`}
                onChange={handleChange}
              />
              <p className="text-red-600 text-sm mt-0.5 lg:text-md hidden peer-invalid:block">
                Email is not valid
              </p>
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
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                spellCheck={false}
                className={`w-full border ${
                  errors.password && "border-red-600"
                } rounded p-3 outline-none text-sm block mt-1 focus:border-blue-700 focus:ring-1 lg:text-md lg:p-4 lg:shadow-sm lg:text-[1rem]`}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <input
                  id="showPassword"
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-1 accent-blue-600"
                />
                <label
                  htmlFor="showPassword"
                  className="select-none text-slate-700 text-xs lg:text-sm"
                >
                  Show password
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="underline font-semibold text-blue-400 text-xs lg:text-sm"
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            {errors.login && (
              <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                {errors.login}
              </p>
            )}
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
          </form>
        </div>
      </div>
    </div>
  );
};
