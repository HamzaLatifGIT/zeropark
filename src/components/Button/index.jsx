import React from "react";
import "./Button.scss";

const Button = ({ children, ...rest }) => {
  return (
    <button
      // disabled={variant === "disabled"}
      className={`StyledButton`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
