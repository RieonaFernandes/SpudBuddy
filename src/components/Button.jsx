import React from "react";

const Button = (Props) => {
  const { children } = Props;
  return (
    <button className="mx-auto px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-500 border-solid buttonShadow duration-200">
      <p>{children}</p>
    </button>
  );
};

export default Button;
