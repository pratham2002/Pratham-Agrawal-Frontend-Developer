import React from "react";

const CapsuleCard = ({ capsule }) => {
  return (
    <div className="capsule-card">
      <h3>{capsule.capsule_serial}</h3>
      <p>Status: {capsule.status}</p>
      <p>Missions: {capsule.missions.length}</p>
      <p>Landings: {capsule.landings}</p>
      <p>Type: {capsule.type}</p>
      {capsule.details && <p>Details: {capsule.details}</p>}
    </div>
  );
};

export default CapsuleCard;
