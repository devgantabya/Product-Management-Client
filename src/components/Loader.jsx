"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <AiOutlineLoading3Quarters className="text-4xl text-blue-600 animate-spin" />
    </div>
  );
};

export default Loader;
