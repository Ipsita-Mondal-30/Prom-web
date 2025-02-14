import React from 'react';

const Modal = ({ isOpen, onClose, onYes }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg text-center shadow-lg">
        
      </div>
    </div>
  );
};

export default Modal;
