import { useState, useEffect } from "react";
import React from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    let value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="border-gray-900 border-2 w-2/6"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password" onChange={handleChange}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className="border-gray-900 border-2 w-2/6"
          value={formData.password}
          onChange={handleChange}
        />

        <button className="bg-green-500 w-2/6" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default SimpleForm;
