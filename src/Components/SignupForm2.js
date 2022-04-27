import React from "react";
import { useFormik } from "formik";

const SignupForm2 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      age: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label>lastname</label>
        <input
          name="lastname"
          placeholder="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        <label>Age</label>
        <input
          name="age"
          placeholder="age"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm2;
