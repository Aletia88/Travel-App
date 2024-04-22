
import * as React from "react";

const Loading = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-400"></div>
      </div>
    </>
  );
};

export default Loading;