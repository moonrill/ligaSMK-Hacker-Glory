/* eslint-disable react/prop-types */
import { useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { useCreateCategoryMutation } from "../../services/categoryApi";
import { useSelector } from "react-redux";

export const CreateCategoryModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const [icon, setIcon] = useState(null);
  const [create] = useCreateCategoryMutation();
  const [errors, setErrors] = useState({});

  const resetModal = () => {
    setName(null);
    setIcon(null);
    setErrors({});
  }

  const handleClose = () => {
    resetModal();
    onClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    name && formData.append("name", name);
    icon && formData.append("icon", icon);
    
    create({ token, data: formData })
      .unwrap()
      .then(() => {
        handleClose();
      })
      .catch(({ data }) => {
        console.log(data);
        setErrors({ ...errors, ...data });
      });
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center w-full h-full fixed top-0 left-0 overflow-y-auto`}
    >
      <div className="w-5/6 xs:w-4/6 md:w-3/6 xl:w-2/6 bg-white rounded-md">
        <div className="border-b p-3">
          <h1 className="text-xl font-semibold">Add Category</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-3 flex flex-col gap-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`border w-full rounded-md p-2 outline-none text-sm focus:border-blue-600 ${
                  errors?.name && "border-red-600"
                }`}
                autoComplete="off"
                spellCheck="false"
                autoFocus
                name="name"
                placeholder="Category name"
                onChange={(e) => {
                  setErrors({...errors, [e.target.name]: null})
                  return setName(e.target.value);
                }}
              />
              {errors.name && (
                <div className="mt-1">
                  {errors.name?.map((err, index) => (
                    <p className="text-sm text-red-600" key={index}>
                      {err}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold">Icon</p>
              <label
                htmlFor="icon"
                className={`text-sm cursor-pointer font-semibold border-2 rounded-md border-dashed flex flex-col justify-center items-center min-h-[120px] w-[120px] hover:border-blue-700 focus:border-blue-700 ${errors?.icon ? "border-red-600" : "border-slate-400"} ${
                  icon && "p-3"
                }`}
              >
                {icon && (
                  <img
                    src={URL.createObjectURL(icon)}
                    alt="icon"
                    className="w-[70px] h-[70px] object-contain"
                  />
                )}
                {icon && (
                  <span className="mt-2 text-xs font-normal text-center">
                    {icon.name}
                  </span>
                )}
                <LuImagePlus
                  size={40}
                  className={`text-blue-600 ${icon && "hidden"}`}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="icon"
                name="icon"
                className="hidden"
                onChange={(e) => {
                  setErrors({...errors, [e.target.name]: null})
                  return setIcon(e.target.files[0]);
                }}
              />
              {errors.icon && (
                <div className="mt-1">
                  {errors.icon?.map((err, index) => (
                    <p className="text-sm text-red-600" key={index}>
                      {err}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="p-3 border-t flex justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="text-sm border text-slate-500 font-semibold border-slate-400 rounded-md py-2 px-3 focus:ring-4 focus:ring-blue-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm border font-semibold bg-blue-700 text-white rounded-md py-2 px-3 focus:ring-4 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const UpdateCategoryModal = ({ isOpen, onClose, category }) => {
  const [name, setName] = useState(category?.name);
  const [icon, setIcon] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const [create] = useCreateCategoryMutation();
  const [errors, setErrors] = useState({});

  const resetModal = () => {
    setName(null);
    setIcon(null);
    setErrors({});
  }

  const handleClose = () => {
    resetModal();
    onClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    name && formData.append("name", name);
    icon && formData.append("icon", icon);
    
    create({ token, data: formData })
      .unwrap()
      .then(() => {
        handleClose();
      })
      .catch(({ data }) => {
        console.log(data);
        setErrors({ ...errors, ...data });
      });
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.3)] ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center w-full h-full fixed top-0 left-0 overflow-y-auto`}
    >
      <div className="w-5/6 xs:w-4/6 md:w-3/6 xl:w-2/6 bg-white rounded-md">
        <div className="border-b p-3">
          <h1 className="text-xl font-semibold">Edit Category</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-3 flex flex-col gap-2">
            <div>
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`border w-full rounded-md p-2 outline-none text-sm focus:border-blue-600 ${
                  errors?.name && "border-red-600"
                }`}
                autoComplete="off"
                spellCheck="false"
                autoFocus
                name="name"
                placeholder="Category name"
                onChange={(e) => {
                  setErrors({...errors, [e.target.name]: null})
                  return setName(e.target.value);
                }}
              />
              {errors.name && (
                <div className="mt-1">
                  {errors.name?.map((err, index) => (
                    <p className="text-sm text-red-600" key={index}>
                      {err}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-semibold">Icon</p>
              <label
                htmlFor="icon"
                className={`text-sm cursor-pointer font-semibold border-2 rounded-md border-dashed flex flex-col justify-center items-center h-[120px] w-[120px] hover:border-blue-700 focus:border-blue-700 ${errors?.icon ? "border-red-600" : "border-slate-400"} ${
                  icon && "p-3"
                }`}
              >
                {icon && (
                  <img
                    src={URL.createObjectURL(icon)}
                    alt="icon"
                    className="w-[70px] h-[70px] object-contain"
                  />
                )}
                {icon && (
                  <span className="mt-2 text-xs font-normal text-center">
                    {icon.name}
                  </span>
                )}
                <LuImagePlus
                  size={40}
                  className={`text-blue-600 ${icon && "hidden"}`}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                id="icon"
                name="icon"
                className="hidden"
                onChange={(e) => {
                  setErrors({...errors, [e.target.name]: null})
                  return setIcon(e.target.files[0]);
                }}
              />
              {errors.icon && (
                <div className="mt-1">
                  {errors.icon?.map((err, index) => (
                    <p className="text-sm text-red-600" key={index}>
                      {err}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="p-3 border-t flex justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              className="text-sm border text-slate-500 font-semibold border-slate-400 rounded-md py-2 px-3 focus:ring-4 focus:ring-blue-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm border font-semibold bg-blue-700 text-white rounded-md py-2 px-3 focus:ring-4 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
