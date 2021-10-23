import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  // un modal es un componente que se renderiza 
  // fuera del contenedor de la aplicación pricipal
  return ReactDOM.createPortal(
    // elemento creado
    <div className="ModalBackground">
      {children}
    </div>,
    // donde se va a renderizar
    document.getElementById('modal')
  );
}

export { Modal };
