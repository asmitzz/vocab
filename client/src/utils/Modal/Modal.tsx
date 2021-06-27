import "./Modal.css";

type ModalProps = {
    show:boolean;
    children?:React.ReactNode;
}

const Modal = ({ show,children }:ModalProps) => {
    return show ? (
        <div className="modal">
            {children}
        </div>
    ) : <div></div>;
};

export default Modal;
