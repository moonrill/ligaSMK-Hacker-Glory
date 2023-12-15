import { Card } from "../components/Card";
import bannerImage from "../assets/images/monitor-tablet-phone.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {useSelector} from 'react-redux'

export const Index = () => {
  const {user} = useSelector((state) => state.auth);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>MADISCHOOL | Home</title>
        </Helmet>
      </HelmetProvider>
      {/* --------------------------------- BANNER --------------------------------- */}
      <div className="mx-auto bg-blue-600 rounded-b-lg shadow-sm flex">
        <div className="container grid grid-cols-2 gap-5  pt-6 px-5 sm:px-10 md:px-16 xl:px-[6rem]">
          <h1 className="text-white font-semibold text-2xl tracking-tight">
            Mading Digital: Ekspresikan Ide, Bagikan Inspirasi!
          </h1>
          <div className="flex items-end justify-end">
            <img
              src={bannerImage}
              alt="banner-image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- BANNER --------------------------------- */}

      {/* ------------------------------ MAIN CONTENT ------------------------------ */}
      <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] w-full h-[120vh] mx-auto py-5 sm:py-10">
        <div className="text-center">
          <h1 className="font-semibold mb-3 xs:text-lg lg:text-3xl sm:mb-5 md:mb-8">
            Pengumuman Penting
          </h1>
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 sm:gap-3  md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
            <Card user={user}/>
          </div>
        </div>
      </div>
      {/* ------------------------------ MAIN CONTENT ------------------------------ */}
    </>
  );
};
