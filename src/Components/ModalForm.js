import { Formik, useFormik } from "formik";
import React, { useState, useStateWithCallbackLazy } from "react";

import Modal from "react-modal/lib/components/Modal";
import Mymodal from "./myModal";

const ModalForm = () => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answer, setAnswer] = useState(0);
  const formik = useFormik({
    initialValues: {
      firstNum: "",
      secondNum: "",
    },
    onSubmit: (values, { resetForm }) => {
      setAnswer(values.firstNum * values.secondNum);
      setModalIsOpen(true);
      console.log(answer);
      resetForm();
    },
  });
  return (
    <div>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <label>First Num</label>
        <input
          type="number"
          name="firstNum"
          value={formik.values.firstNum}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <label>Second Num</label>
        <input
          type="number"
          name="secondNum"
          value={formik.values.secondNum}
          onChange={formik.handleChange}
          className="border-2 border-gray-500 "
        />
        <button type="submit">Submit</button>
      </form>
      {/* <Modal isOpen={modalIsOpen}>
        <div>This is modal</div>
        <div>your answer is {answer}</div>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          close
        </button>
      </Modal> */}

      <Mymodal
        open={modalIsOpen}
        setIsModalOpen={setModalIsOpen}
        value={answer}
      />
    </div>
  );
};

export default ModalForm;
