import React, { useState, useEffect } from "react";

const SimpleForm2 = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(...formData);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <form>
        <label htmlFor="email">email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={handleSubmit} className="bg-blue-600">
          submit
        </button>
      </form>
    </div>
  );
};
export default SimpleForm2;
