import React from "react";

const Modal = ({ selected, setSelected }) => {
  console.log("@inse", selected);
  return (
    <div id="modal">
      <span className="btn" onClick={() => setSelected(false)}>
        {`<-`}BACK
      </span>
      {selected.map((img) => {
        return (
          <div>
            <img src={img} alt="Girl in a jacket" width="500" height="600" />
          </div>
        );
      })}
      <span className="btn" onClick={() => setSelected(false)}>
        BACK
      </span>
    </div>
  );
};

export default Modal;
