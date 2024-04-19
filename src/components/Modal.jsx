import React, {useState, useEffect, Children} from "react";

function Modal({children, onClose}){
    return (
        <>
        <div onClick={onClose} className="fixed top-0 left-0 w-full h-screen bg-black-60 z-10"/>
        <dialog open className="border-none rounded-md shadow-md p-0 z-10 overflow-hidden	">
            {children}
        </dialog>
        </>
    );
}

export default Modal;