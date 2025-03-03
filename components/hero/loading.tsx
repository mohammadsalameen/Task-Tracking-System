import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-lg font-semibold text-gray-300">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
