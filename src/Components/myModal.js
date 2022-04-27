import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

const Mymodal = ({ value, open, setIsModalOpen }) => {
  return (
    <div>
      <Modal isOpen={open}>
        <div>This is modal</div>
        <div>your answer is {value}</div>
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

export default Mymodal;
