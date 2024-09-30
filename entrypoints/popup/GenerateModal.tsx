// src/components/Modal.tsx
import React from 'react';
import "@/entrypoints/popup/App.css"

interface ModalProps {
  onClose: () => void;
  open: boolean
}

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Enter Information</h2>
        <input
          type="text"
          placeholder="Type something..."
          className="w-full border border-gray-300 p-2 rounded mb-4"
        />
        {/* <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={() => {
            alert('Submitted!');
            onClose();
          }}
        >
          Submit
        </button> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
};

export default Modal;
