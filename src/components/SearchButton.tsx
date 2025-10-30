import React from "react";

interface SearchButtonProps {
  onClick: () => void; // বোতাম ক্লিক হলে কী হবে তা parent থেকে পাঠানো হবে
  label?: string; // চাইলে বোতামের text পরিবর্তন করার জন্য
  className?: string; // চাইলে custom style পাঠাতে পারো
}

const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  label = "Search",
  className = "mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition"
}) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default SearchButton;
