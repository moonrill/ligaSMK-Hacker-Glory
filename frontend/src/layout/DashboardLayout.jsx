import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = user && token;
  const isMember = user && user.role === "member";

  if(!isAuthenticated) {
    return <Navigate to="/login" />
  }

  // Check first if user has logged in and the role is not member
  if (isAuthenticated) {
    return <Navigate to={isMember ? "/404" : "/dashboard"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
