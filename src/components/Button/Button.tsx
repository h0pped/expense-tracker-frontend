import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  width?: "full" | "75" | "50" | "25" | "auto";
  disabled?: boolean;

  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  width = "auto",
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`width-${width} size-${size} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
