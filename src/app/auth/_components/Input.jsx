import React from "react";

const Input = ({ id, type, value, onChange, label }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block rounded-lg px-4 pt-4 pb-1 w-full text-md text-orange-800 bg-neutral-50/50 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute text-md text-orange-600 duration-300 transform -translate-y-3 scale-75 top-3 left-4 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-focus:scale-75"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
