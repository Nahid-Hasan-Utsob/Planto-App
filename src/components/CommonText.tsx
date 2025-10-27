import React from "react";

type CommonTextProps = {
  text: string;
  className?: string;
};

const CommonText: React.FC<CommonTextProps> = ({ text, className = "" }) => {
  return <p className={className}>{text}</p>;
};

export default CommonText;
