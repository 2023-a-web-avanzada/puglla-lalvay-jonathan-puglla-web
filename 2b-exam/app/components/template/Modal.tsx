import React from "react";

interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
    return (
        <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
            <div className='modal-box bg-white text-black shadow-2xl relative'>
                <label
                    onClick={() => setModalOpen(false)}
                    className='btn btn-sm btn-circle absolute text-white right-2 top-2 bg-black border-transparent hover:bg-white hover:text-black'
                >
                    ✕
                </label>
                {children}
            </div>
        </div>
    );
};

export default Modal;