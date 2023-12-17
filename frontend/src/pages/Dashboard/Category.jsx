/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from "../../services/categoryApi";
import LoadingTableRow from "../../components/LoadingTableRow";
import Fab from "../../components/FAB";
import { CreateCategoryModal } from "../../components/Modals/CategoryModal";
import { useState } from "react";

const CategoryItem = ({ name, icon, madings_count }) => {
  const { user, token } = useSelector((state) => state.auth);
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = () => {
    deleteCategory({ token, name })
      .unwrap()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50">
      <td className="px-4 py-1 md:py-2 w-[25px] md:w-[30px] lg:w-[35px]">
        <img
          src={`http://localhost:8000/storage/${icon}`}
          alt="category-icon"
          className="w-[25px] md:w-[30px] lg:w-[35px]"
        />
      </td>
      <td className="px-4 py-1 md:py-2 font-semibold text-gray-700">{name}</td>
      <td className="px-4 py-1 md:py-2 text-gray-500 font-semibold">
        {madings_count}
      </td>
      {user?.role === "admin" && (
        <td className="px-4 py-1 md:py-2 font-semibold">
          <div className="flex gap-3 items-center">
            <button type="button" className="text-blue-600">
              Edit
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

export const Category = () => {
  const { data: categories, isLoading } = useGetAllCategoryQuery(true);
  // const [deleteCategory] = useDeleteCategoryMutation();
  const { user } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="p-3 w-full lg:p-5">
        <h1 className="text-xl font-semibold mb-7 text-slate-900">Category</h1>
        <div className="rounded-lg overflow-hidden">
          <table className="rounded-lg w-full font-inter text-xs lg:text-sm text-left shadow">
            <thead className="mb-3 bg-blue-100">
              <tr className="rounded-xl text-slate-700 font-bold">
                <th className="py-3 px-4 w-[25px] md:w-[30px] lg:w-[35px]">
                  Icon
                </th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Total Madings</th>
                {user?.role === "admin" && (
                  <th className="py-3 px-4">Action</th>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                user?.role === "admin" ? (
                  <LoadingTableRow columns={4} rows={3} />
                ) : (
                  <LoadingTableRow columns={3} rows={3} />
                )
              ) : null}
              {categories?.map((category) => (
                <CategoryItem {...category} key={category.id} />
              ))}
            </tbody>
          </table>
          {categories?.length === 0 && (
            <div className="w-full flex justify-center mt-3 text-slate-500">
              <p>No data available</p>
            </div>
          )}
        </div>

        <Fab text={"Add category"} onClick={() => setOpenModal(true)} />
        <CreateCategoryModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
};
