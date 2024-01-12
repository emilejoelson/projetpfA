import React from "react";
import Modal from "react-modal";
import { BsEyeFill } from "react-icons/bs";

const CardModal = ({ isOpen, onRequestClose, name, category, subcategory, subcategory1, subcategory2 }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{subcategory}</p>
      <p>{subcategory1}</p>
      <p>{subcategory2}</p>
      <button onClick={onRequestClose}>
        <BsEyeFill size={24} color="rgba(255, 255, 255, 0.83)" />
      </button>
    </Modal>
  );
};

export default CardModal;
