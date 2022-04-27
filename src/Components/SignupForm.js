import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "first name should have more than 3 characters")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "first name should have more than 3 characters")
    .required("Required"),
  email: Yup.string().min(3, "too Short").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
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
        <label>firstName</label>
        <input
          name="firstName"
          type="text"
          id="firstName"
          placeholder="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        {formik.errors.firstName ? (
          <div className="text-red-600 text-lg font-thin">
            {formik.errors.firstName}
          </div>
        ) : null}
        <label>lastName</label>
        <input
          name="lastName"
          id="lastName"
          type="text"
          placeholder="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        {formik.errors.lastName ? formik.errors.lastName : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        {formik.errors.email ? formik.errors.email : null}
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border border-gray-400 rounded-lg w-2/5 "
        />
        {formik.errors.password ? formik.errors.password : null}
        <label htmlFor="confirmPassword">confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="border border-gray-400 rounded-lg w-2/5"
        />
        {formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
        <button type="submit" className="p-1 bg-green-500 rounded-md w-1/5">
          Submit
        </button>
      </form>

      <div className="col-span-2"></div>
    </div>
  );
};
export default SignupForm;
