import React, { type ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    /* Backdrop: Darkens background and centers the modal */
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose} // sulkee modalin jos klikkaa sen vierestä
    >
      /* Content Box: White container for the children */
      <div 
        className="bg-white rounded-2xl max-w-lg w-full relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // estää sulkemisen jos klikkaa modalin sisäpuolelta
      >
        {/* X-nappi */}
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Rendered Children */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;