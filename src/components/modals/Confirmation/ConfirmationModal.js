import React from "react";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-cyan-400 bg-opacity-90 text-white rounded-3xl p-4 w-80 text-center shadow-lg relative">
        <p className="text-base font-semibold">{message}</p>
        <div className="flex justify-around mt-3">
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-200"
          >
            No
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
