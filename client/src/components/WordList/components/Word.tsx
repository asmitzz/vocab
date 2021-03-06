import { useState } from "react";
import { LexicalEntries, WordType } from "../../../features/words/words.types";
import Modal from "../../../utils/Modal/Modal";
import WordDetails from "./WordDetails";

type WordProps = {
  word:WordType;
}

const Word = ({word}:WordProps) => {
  console.log(word);
  
    const [fullscreen,setFullscreen] = useState<boolean>(false);

    const getMeaning = (entry:LexicalEntries) => {
        if(entry.entries[0].etymologies){
           return entry?.entries[0].etymologies[0]
        }
        return entry.entries[0].senses[0].definitions
    }

    return (
        <div className="word">
            <Modal show={fullscreen}>
               <WordDetails setFullscreen={setFullscreen} word={word}/>
            </Modal>

            <div className="word__card" onClick={() => setFullscreen(true)}>
               <h3 className="word__name">{word.id}</h3>
               { 
                  word.lexicalEntries.map( (entry:LexicalEntries,i:number) => {
                      return i === 0 ? (
                        <div className="word__meaning" key={entry.lexicalCategory.id}>({entry.lexicalCategory.id}) {getMeaning(entry)}</div>
                      ) : (
                      <div className="word__meaning" key={entry.lexicalCategory.id}>({entry.lexicalCategory.id}) {entry.entries[0].senses[0].definitions[0]}</div>
                    )
                  })
               }
            </div>
        </div>
    );
};

export default Word;
