import React from "react";

import ModalForm from "./ModalForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  isOpen,
  onClose,
}: Props) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 " onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative bg-red-500 shadow-lg  mx-2 lg:mx-0 lg:w-fit rounded-lg z-10 p-4">
        <div className="w-[70%]">
        <ModalForm
          onClose={onClose}
        />
        </div>
      </div>
    </div>
  );
};

export default Modal;
