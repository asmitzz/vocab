import { unwrapResult } from "@reduxjs/toolkit";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addWord } from "../../features/words/wordsSlice";
import "./AddToDictionary.css";

type AddToDictionaryProps = {
    setBackdrop:Dispatch<SetStateAction<boolean>>;
}

const AddToDictionary = ({ setBackdrop }:AddToDictionaryProps) => {

    const [word,setWord] = useState<string>(""); 
    const dispatch = useAppDispatch();

    const handleAdd = async() => {
        try {
           const result = await dispatch(addWord({word}));
           unwrapResult(result);
           setBackdrop(false);
        } catch (error) {
           console.log(error);
        }
    }

    return (
        <div className="add__To__dictionary">
            <h4>Add to Dictionary</h4>
            <div className="form__group">
                <label className="form__label">New Word</label>
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)} className="form__control"/>
            </div>
            <div className="btn__container">
                <button className="btn" onClick={() => setBackdrop(false)}>CANCEL</button>
                <button className="btn" onClick={handleAdd}>ADD</button>
            </div>
        </div>
    );
};

export default AddToDictionary;
