import React from "react";
import arrow from "../assets/Vector 1.svg";

type CommonTextProps = {
  text: string;
  className?: string;
};

const Style_Common_Text: React.FC<CommonTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className="flex items-center text-center justify-center py-10 ">
      <div>
        <img className="-rotate-180 h-14" src={arrow} alt="" />
      </div>
      <p className={className}>{text}</p>
      <div>
        <img className=" h-14" src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Style_Common_Text;
