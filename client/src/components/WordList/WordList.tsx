import { Dispatch,SetStateAction } from "react";
import Word from "./components/Word";
import "./WordList.css";

type WordListProps = {
    search:boolean;
    setSearch:Dispatch<SetStateAction<boolean>>;
    input:string;
}

const WordList = ({ search,setSearch,input }:WordListProps) => {
    return (
        <ul className="WordList">
            { !search && <Word/> }
        </ul>
    );
};

export default WordList;
