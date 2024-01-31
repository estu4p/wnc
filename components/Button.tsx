import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  height?: string;
};

const Button = ({ type, title, icon, variant, height }: ButtonProps) => {
  return (
    <button
      className={`flexCenter border rounded-full gap-3 ${variant} ${height}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="whitespace-nowrap bold-16 cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
