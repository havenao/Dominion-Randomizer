import React from "react";

const Extra = ({ extra }) => {
  return (
    <div className="extra item">
      <div className={`${extra.type} extra-label`}>
        <h4>{extra.type}</h4>
      </div>
      <img src={`/images/${extra.name.toLowerCase()}.jpg`} alt={extra.name} />
      <h4 className="overlay-text">{extra.name}</h4>
    </div>
  );
};
export default Extra;
