import { unwrapResult } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addWord } from "../../features/words/wordsSlice";
import { Status } from "../../generic.types";
import { Success,Error } from "../../utils/Toast/Toast";
import "./AddToDictionary.css";

type AddToDictionaryProps = {
    setBackdrop:Dispatch<SetStateAction<boolean>>;
}

const AddToDictionary = ({ setBackdrop }:AddToDictionaryProps) => {

    const [word,setWord] = useState<string>(""); 
    const [status,setStatus] = useState<Status>("idle"); 
    const dispatch = useAppDispatch();

    const handleAdd = async() => {
        setStatus("pending")
        try {
           if(status === "idle"){
             const result = await dispatch(addWord({word}));
             unwrapResult(result);
           }
           setStatus("succeeded");
           setWord("");

           setTimeout(() => {
             setStatus("idle");
           },2000)
        } catch (error) {
           setStatus("failed")

           setTimeout(() => {
             setStatus("idle");
           },2000)
        }
    }

    return (
        <div className="add__To__dictionary">
            <h4 className="add__To__dictionary__heading">Add to Dictionary</h4>
            <div className="form__group">
                <label className="form__label">New Word</label>
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className="form__control"/>
            </div>
            <div className="btn__container">
                <button className="btn" onClick={() => setBackdrop(false)}>CANCEL</button>
                <button className="btn" disabled={word === "" || status === "pending"} onClick={handleAdd}>{ status === "pending" ? "ADDING..."  : "ADD"}</button>
            </div>

            <Success show={status === "succeeded"} message="Word added successfully"/>
            <Error show={status === "failed"} message="Word not found"/>
        </div>
    );
};

export default AddToDictionary;
