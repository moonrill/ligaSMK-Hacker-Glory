import infoIcon from "../assets/images/info-icon.svg";
import saveIcon from "../assets/images/save-icon.svg";

export const Card = () => {
  return (
    <div className="rounded-lg border md:rounded-xl shadow-lg overflow-hidden flex flex-col bg-white mb-7 sm:mb-0">
      <img
        src="https://source.unsplash.com/600x400"
        alt="Post"
        className="w-full object-contain"
      />
      <div className="py-3 px-4">
        <span className="bg-red-100 w-fit h-fit text-red-800 text-sm flex items-center font-medium px-2.5 py-0.5 rounded-md dark:bg-red-900 dark:text-red-300 mb-2 gap-1.5">
          Penting <img src={infoIcon} alt="info-icon" width={15} />
        </span>
        <div className="flex justify-between">
          <h1 className="font-semibold text-lg tracking-tight mb-3 leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit
            sequi aliquid praesentium
          </h1>
        </div>
        <div className="text-xs whitespace-normal mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis,
          nihil!
        </div>
        <div className="flex justify-end">
          <div className="bg-yellow-400 font-semibold py-1.5 px-3 rounded-lg flex items-center gap-2">
            <img src={saveIcon} alt="save-icon" width={15} className="object-cover mt-0.5"/>
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};
