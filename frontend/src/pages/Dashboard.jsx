import { Helmet, HelmetProvider } from "react-helmet-async";

export const Dashboard = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};
