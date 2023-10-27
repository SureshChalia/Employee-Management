import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Employee Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="text"
                placeholder="Enter Employee Name"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Employee Email Id{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="email"
                placeholder="Enter Employee Email"
                {...register("email")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Contact No.{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="text"
                placeholder="Enter Employee Contact No."
                {...register("contactno")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="dob"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Date of Birth{" "}
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                placeholder="Enter Employee dob"
                {...register("dob")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="salary"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Salary{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="text"
                placeholder="Enter Employee Salary"
                {...register("salary")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="joiningdate"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Joining Date{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="date"
                placeholder="Enter Employee joining Date"
                {...register("joiningdate")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="releivingdate"
              className="text-base font-medium text-gray-300"
            >
              {" "}
              Releiving Date{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none"
                type="date"
                placeholder="Enter Releiving Date"
                {...register("releivingdate")}
              ></input>
            </div>
          </div>

          <div>
        <label htmlFor="status" className="text-base font-medium text-gray-300">
          Status
        </label>
        <div className="mt-2.5 flex gap-4">
          <label className="text-base font-medium text-gray-300">
            <input
              type="radio"
              value="active"
              {...register("status")}
            />
            Active
          </label>
          <label className="text-base font-medium text-gray-300">
            <input
              type="radio"
              value="inactive"
              {...register("status")}
            />
            Inactive
          </label>
        </div>
      </div>

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Employeee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
