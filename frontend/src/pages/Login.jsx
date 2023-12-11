import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../services/authApi";
import { setCredentials, setPassword } from "../reducer/slices/loginSlice";
import { useState } from "react";
import blogLogo from "../assets/images/blog.svg";

export const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { credentials, password } = useSelector((state) => state.login);
  const [login, { isLoading }] = useLoginMutation();

  const action = {
    credentials: setCredentials,
    password: setPassword,
  };

  const handleChange = (e) => {
    setErrors({ ...errors, [e.target.name]: "" });

    return dispatch(action[e.target.name](e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!credentials) validationErrors.credentials = "Email is required";
    if (!password) validationErrors.password = "Password is required";
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = { credentials, password };

    login(data).then((res) => console.log(res));
  };

  return (
    <div className="container sm:flex sm:items-center md:max-w-full md:p-10 lg:p-0 mx-auto h-screen">
      <div className="h-full w-full flex align-bottom flex-col sm:flex-row sm:rounded-md sm:shadow-md sm:h-3/4 bg-indigo-700 md:h-full md:bg-slate-50 md:rounded-xl sm:overflow-hidden md:shadow-xl lg:h-full xl:h-full lg:rounded-none">
        <div className="h-1/2 p-5 flex w-full justify-center bg-indigo-700 sm:h-full sm:w-full sm:justify-normal">
          <div className="flex justify-center items-center max-w-sm sm:justify-start sm:items-start sm:p-6">
            <img src={blogLogo} alt="blog img" className="h-fit"/>
          </div>
        </div>
        <div className="p-10 w-full h-4/6 bg-slate-50 rounded-t-3xl mt-auto sm:p-6 sm:w-5/6 sm:h-full sm:justify-center sm:rounded-none sm:flex md:w-4/6 md:h-full md:m-0 md:p-6 sm:flex-col md:justify-center">
          <h1 className="text-4xl font-semibold text-indigo-700 lg:text-5xl mb-2">
            Login
          </h1>
          <form
            action=""
            className="mt-5 flex flex-col gap-5 sm:justify-center sm:gap-2"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="credentials"
                className="font-medium text-sm text-slate-600 lg:text-[1rem] after:content-['*'] after:text-red-600 after:ml-1"
              >
                Your email
              </label>
              <input
                id="credentials"
                type="text"
                name="credentials"
                maxLength={30}
                spellCheck={false}
                placeholder="example@gmail.com"
                className={`p-3 outline-none border ${
                  errors.credentials && "border-red-600"
                } rounded w-full text-sm block mt-1 lg:text-[1rem] lg:p-4 lg:shadow-sm focus:border-indigo-700 focus:ring-1 `}
                onChange={handleChange}
              />
              {errors.credentials && (
                <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                  {errors.credentials}
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
                } rounded p-3 outline-none text-sm block mt-1 focus:ring-1 focus:ring-indigo-700 lg:text-md lg:p-4 lg:shadow-sm lg:text-[1rem]`}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-0.5 lg:text-md">
                  {errors.password}
                </p>
              )}
            </div>
            <div>
              <input
                id="showPassword"
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2 accent-indigo-600"
              />
              <label
                htmlFor="showPassword"
                className="select-none text-slate-700 text-sm"
              >
                Show password
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className={`px-5 uppercase font-semibold py-3 rounded-lg block text-white active:ring sm:py-2 sm:text-sm lg:py-3 ${
                isLoading ? "bg-indigo-500" : "bg-indigo-700"
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-indigo-600" />
                  <div className="ml-4">Loading...</div>
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
