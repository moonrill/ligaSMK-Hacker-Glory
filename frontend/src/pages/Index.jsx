import { Card } from "../components/Card";
import bannerImage from "../assets/images/monitor-tablet-phone.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import { CategoryCard } from "../components/CategoryCard";
import { useGetAllCategoryQuery } from "../services/categoryApi";

export const Index = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: categories, isLoading } = useGetAllCategoryQuery();
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>MADISCHOOL | Home</title>
        </Helmet>
      </HelmetProvider>
      {/* --------------------------------- BANNER --------------------------------- */}
      
      <div className="mx-auto bg-blue-600 rounded-b-lg shadow-sm flex">
        <div className="container grid grid-cols-2 gap-5 pt-8 px-5 sm:px-10 md:px-16 xl:px-[6rem] ">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:tracking-normal lg:  tracking-tight">
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

      {/* --------------------------- PENGUMUMAN PENTING --------------------------- */}
      <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] w-full mx-auto py-5 sm:py-10">
        <div>
          <div className="mb-3 flex justify-between items-center lg:mb-5">
            <h1 className="font-semibold text-lg lg:text-2xl">
              Pengumuman Penting
            </h1>
            <Link className="text-xs md:text-sm lg:text-base flex items-center gap-1 font-semibold text-blue-700 transition-all hover:border-b hover:border-blue-700 md:self-end">
              Lainnya <HiArrowLongRight className="mt-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-3 sm:gap-3  md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
            <Card user={user} />
          </div>
        </div>
      </div>
      {/* --------------------------- PENGUMUMAN PENTING --------------------------- */}

      {/* ---------------------------- CATEGORY SECTION ---------------------------- */}
      <div className="bg-blue-200 mx-auto py-4 sm:py-10">
        <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] flex flex-col justify-center">
          <h1 className="font-semibold text-lg lg:text-2xl text-center">
            Category
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mt-5 lg:mt-10">
            {categories?.map((category) => (
              <CategoryCard key={category.id} name={category.name} icon={category.icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
