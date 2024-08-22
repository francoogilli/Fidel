import React from "react";

const FullScreenSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-[#5fff5c] border-t-transparent border-t-4 rounded-full animate-spin"></div>
    </div>
  );
};

export default FullScreenSpinner;
