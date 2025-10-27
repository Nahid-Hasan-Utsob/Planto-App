import React from "react";

type CommonButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const CommonButton: React.FC<CommonButtonProps> = ({
  text,
  className = "",
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CommonButton;
