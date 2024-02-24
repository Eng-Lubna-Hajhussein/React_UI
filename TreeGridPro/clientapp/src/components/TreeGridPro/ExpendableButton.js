import React from "react";

const ExpendableButton = ({ isOpen, toggle, space, appLang }) => {
  return (
    <button onClick={toggle}>
      <span
        className="material-symbols-outlined"
        style={{
          transform:appLang===1?`rotate(${isOpen ? 0 : 90}deg)`:`rotate(${isOpen ? 360 : 270}deg)`,
          transition: "all 0.25s",
          marginLeft: `${space * 2}px`,
        }}
      >
        expand_more
      </span>
    </button>
  );
};

export default ExpendableButton;
