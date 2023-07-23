import React from "react";
import Modal from "react-modal";

const CapsuleModal = ({ isOpen, closeModal, capsule }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Capsule Details"
    >
      <div className="modal-content">
        <h3>{capsule.capsule_serial}</h3>
        <p>Status: {capsule.status}</p>
        <p>Missions: {capsule.missions.length}</p>
        <p>Landings: {capsule.landings}</p>
        <p>Type: {capsule.type}</p>
        {capsule.details && <p>Details: {capsule.details}</p>}
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </Modal>
  );
};

export default CapsuleModal;
