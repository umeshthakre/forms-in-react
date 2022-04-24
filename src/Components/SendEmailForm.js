import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Modal from "react-modal/lib/components/Modal";
import { useFormik } from "formik";

const SendEmailForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const TEMPLATE_ID = "template_vdls1sm";
  const SERVICE_ID = "service_8inezlv";
  const USER_ID = "sqSJB7MHjcBP7kx3W";
  Modal.setAppElement(document.getElementById("root"));

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    onSubmit: (values, { resetForm }) => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID).then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true);
          setModalMessage("Your message has been sent!");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          setIsModalOpen(true);
          setModalMessage("Your message has not been sent!");
        }
      );
    },
  });

  return (
    <div className="App">
      <form id="myform" onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <label>Message</label>
        <textarea
          type="text"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <button type="submit">Submit</button>
      </form>
      <Modal isOpen={isModalOpen}>
        <div>This is modal</div>
        <div>{modalMessage}</div>
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          close
        </button>
      </Modal>
    </div>
  );
};
export default SendEmailForm;
