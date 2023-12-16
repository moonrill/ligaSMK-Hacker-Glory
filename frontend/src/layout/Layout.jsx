import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../services/authApi";

export const Layout = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let getUserData;

  if (token && !user) {
    getUserData = dispatch(
      authApi.endpoints.getUser.initiate(token, { forceRefetch: true })
    );
  }

  return (
    <div>
      <Navbar getUserData={getUserData} />
      <Outlet />
    </div>
  );
};
