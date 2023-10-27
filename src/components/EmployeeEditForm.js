import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

async function getuser(id) {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/getUser/${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error, "error in edit from")
  };
}


const EmployeeEditForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contactno: '',
      dob: "",
      salary: "",
      joiningdate: "",
      releivingdate: "",
      status: "",
    }
  });
  const { id } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async function () {
      const res = await getuser(id);
      setValue("name", res.data.name);
      setValue("email", res.data.email);
      setValue("contactno", res.data.contactno);
      setValue("dob", res.data.dob);
      setValue("salary", res.data.salary);
      setValue("joiningdate", res.data.joiningdate);
      setValue("releivingdate", res.data.releivingdate);
      setValue("status", res.data.status);

      setLoading(false);
    })();


  }, [])

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/updateUser/${id}`,
        data
      );
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover object-top"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white">
                Empower your business with our employee creation!
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              Create a Employee
            </h2>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
              <Link
                to={"/"}
                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700 flex items-center gap-3"
              >
                <FaBackward />
                Back to all Employee List
              </Link>
            </p>

            {loading ? <Loader /> : <div className="edit-form">
              <h2>Edit Employee</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
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
                      Update Employeee
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
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeEditForm;
