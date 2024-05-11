const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="modal">
          <div className="modal__backdrop" onClick={onClose} />
          <div className="modal__container">
            <div className="modal__controls">
              <button
                className="modal__close"
                type="button"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
