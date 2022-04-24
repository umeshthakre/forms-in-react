import { useFormik } from "formik";
import React from "react";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-2"></div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col col-span-4 border-2 border-gray-400 p-4"
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="border border-gray-400 rounded-lg w-2/5"
        />
        <button type="submit" className="p-1 bg-green-500 rounded-md w-1/5">
          Submit
        </button>
      </form>

      <div className="col-span-2"></div>
    </div>
  );
};
export default SignupForm;
