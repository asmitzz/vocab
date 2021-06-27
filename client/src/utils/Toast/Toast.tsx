import "./Toast.css";

type ToastProps = {
    message:string;
    show:boolean;
}

export const Success = ({message,show}:ToastProps) => {
    return show ? <div className="valid__feedback">{message}</div> : <div></div>
}

export const Error = ({message,show}:ToastProps) => {
    return show ? <div className="invalid__feedback">{message}</div> : <div></div>
}