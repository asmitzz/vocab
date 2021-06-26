import React from "react";
import "./Backdrop.css";

type BackdropProps = {
    show:boolean;
    children?:React.ReactNode;
}

const Backdrop = ({ show,children }:BackdropProps) => {
    return show ? (
        <div className="backdrop">
            { children }
        </div> 
    ):<div></div>;
};

export default Backdrop;
