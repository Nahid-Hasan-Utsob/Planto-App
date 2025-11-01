import React from "react";
import { HashLoader } from "react-spinners";

interface LoaderProps {
  size?: number;          // Loader size (optional)
  color?: string;         // Loader color (optional)
  height?: string | number; // Container height
}

const Loader: React.FC<LoaderProps> = ({
  size = 33,
  color = "#ffff00",
  height = "80vh",
}) => {
  return (
    <div
      className="flex justify-center items-center  backdrop-blur-2xl rounded-2xl"
      style={{ height }}
    >
      <HashLoader color={color} size={size} />
    </div>
  );
};

export default Loader;
