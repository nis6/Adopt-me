import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div"); //always create a div if and only if there isn't one already
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current); //to prevent memory leak
  }, []); //because this gets created for every render inside actual dom

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
