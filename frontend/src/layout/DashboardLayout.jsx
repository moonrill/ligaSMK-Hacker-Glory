import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { authApi } from "../services/authApi";

export const DashboardLayout = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const isMember = user && user.role === "member";
  let getUserData;

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (token && !user) {
    getUserData = dispatch(
      authApi.endpoints.getUser.initiate(token, { forceRefetch: true })
    );
  }

  // Check first if user has logged in and the role is not member
  if (isMember) {
    return <Navigate to={'/404'} />;
  }

  return getUserData ? (
    <p>Loading...</p>
  ) : (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
