import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  id,
  value,
  setValue,
  alert = false,
}) => {
  return (
    <div className={`form-input ${alert && "error"}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
