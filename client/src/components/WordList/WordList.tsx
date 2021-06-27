import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchWords } from "../../features/words/wordsSlice";
import { Error } from "../../utils/Toast/Toast";
import Word from "./components/Word";
import Spinner from "../../utils/Spinner/Spinner";
import "./WordList.css";

type WordListProps = {
    search:boolean;
    input:string;
}

const WordList = ({ search,input }:WordListProps) => {
    const { words,status } = useAppSelector( state => state.words );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(status === "idle"){
            dispatch(fetchWords())
        }
    },[status,dispatch]);

    const getFilteredWords = (words:any,input:string) => {
        if(search){
            return input === "" ? [] : words.filter( (word:any) => word.word.id.includes(input.toLowerCase()) );
        }
        return words;
    }

    const filteredWords = getFilteredWords(words,input);
    
    return (
        <div className="WordList">
            {
                status === "succeeded" && filteredWords.map((word:any) => (
                    <Word key={word._id} word={word}/>
                )).reverse()
            }

            { status === "succeeded" && filteredWords.length === 0 && <div className="no__results">No words found</div> }

            {  status === "pending" && <Spinner/> }

            <Error show={status === "failed"} message="something went wrong with server"/>
        </div>
    );
};

export default WordList;
