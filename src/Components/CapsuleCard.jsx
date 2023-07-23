import React, { useState } from "react";
import CapsuleModal from "./CapsuleModal";

const CapsuleCard = ({ capsule }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);
  return (
    <div className="capsule-card" onClick={openModal}>
      <h3>{capsule.capsule_serial}</h3>
      <p>Status: {capsule.status}</p>
      <p>Missions: {capsule.missions.length}</p>
      <p>Landings: {capsule.landings}</p>
      <p>Type: {capsule.type}</p>
      {capsule.details && <p>Details: {capsule.details}</p>}
      {isModalOpen && (
        <CapsuleModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          capsule={capsule}
        />
      )}
    </div>
  );
};

export default CapsuleCard;
