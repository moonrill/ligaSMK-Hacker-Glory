import { Card } from "../components/Card";

export const Index = () => {
  return (
    <div className="container px-5 sm:px-10 md:px-16 xl:px-[6rem] w-full h-[120vh] mx-auto py-5">
      <div className="sm:grid sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
