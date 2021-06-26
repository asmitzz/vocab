import { Dispatch,SetStateAction, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWords } from "../../features/words/wordsSlice";
import Word from "./components/Word";
import "./WordList.css";

type WordListProps = {
    search:boolean;
    setSearch:Dispatch<SetStateAction<boolean>>;
    input:string;
}

const WordList = ({ search,setSearch,input }:WordListProps) => {
    const { words,status } = useAppSelector( state => state.words );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchWords())
        }
    },[status,dispatch]);

    const getFilteredWords = (words:any,input:string) => {
        if(input !== ""){
            return words.filter( (word:any) => word.id.includes(input) )
        }
        return words;
    }

    const filteredWords = getFilteredWords(words,input);
    
    return (
        <ul className="WordList">
            { !search && <Word/> }
            {
                filteredWords.map((word:any) => (
                    <Word key={word.id} word={word}/>
                ))
            }
        </ul>
    );
};

export default WordList;
