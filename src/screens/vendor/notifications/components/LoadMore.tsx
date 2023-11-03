import React, { useState } from "react";import { BiLoaderCircle } from "react-icons/bi";

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    
    <button
    onClick={() => {
      setLoading(!loading);
    }}
    className="border font-bold dark:border-white/5 dark:text-white rounded-lg flex items-center mx-auto my-5 gap-3 p-3"
  >
    <BiLoaderCircle
      className={`w-6 h-6 ${loading ? "animate-spin" : ""}`}
    />
    Load more
  </button>
  );
};

export default LoadMoreButton;