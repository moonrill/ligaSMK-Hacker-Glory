import { useSelector } from "react-redux";
import { useGetAllCategoryQuery } from "../../services/categoryApi";
import LoadingTableRow from "../../components/LoadingTableRow";
import Fab from "../../components/FAB";
import { CategoryModal } from "../../components/Modals/CategoryModal";
import { useState } from "react";

export const Category = () => {
  const { data: categories, isLoading } = useGetAllCategoryQuery(true);
  const { user } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="p-3 w-full lg:p-5">
        <h1 className="text-xl font-semibold mb-7 text-slate-900">Category</h1>
        <table className="rounded-lg w-full font-inter text-xs lg:text-sm text-left shadow">
          <thead className="mb-3 bg-blue-100">
            <tr className="rounded-xl text-slate-700 font-bold">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Icon</th>
              <th className="py-2 px-4">Total Madings</th>
              {user?.role === "admin" && <th className="py-2 px-4">Action</th>}
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
              <tr
                key={category.id}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                <td className="px-4 py-1 md:py-2 font-semibold">
                  {category.name}
                </td>
                <td className="px-4 py-1 md:py-2">
                  <img
                    src={`http://localhost:8000/storage/${category.icon}`}
                    alt="category-icon"
                    className="w-[25px] md:w-[30px] lg:w-[35px]"
                  />
                </td>
                <td className="px-4 py-1 md:py-2">{category.madings_count}</td>
                {user?.role === "admin" && (
                  <td className="px-4 py-1 md:py-2">
                    <div className="flex gap-3 items-center">
                      <div className="text-blue-600">Edit</div>
                      <div className="text-red-600">Delete</div>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <Fab text={"Add category"} onClick={() => setOpenModal(true)} />
        <CategoryModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </>
  );
};
