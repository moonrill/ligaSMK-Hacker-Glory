/* eslint-disable react/prop-types */
import { CgDanger } from "react-icons/cg";

export const DeleteConfirmationAlert = ({ isShow, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(); // Call the onDelete function when confirmed
  };

  return (
    <div>
      {/* Confirmation Alert */}
      {isShow && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-3 rounded-lg flex flex-col items-center justify-center">
            <div>
              <CgDanger className="text-gray-400" size={"4rem"} />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-lg font-normal mb-4 text-gray-500">
                Are you sure you want to delete this data?
              </h3>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg mr-3 font-semibold"
                onClick={handleDelete}
              >
                Yes, I&apos;m sure
              </button>
              <button
                className="border text-slate-700 hover:bg-gray-100 px-4 py-2 rounded-lg"
                onClick={() => onClose()}
              >
                No, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
