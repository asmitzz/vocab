import { useState } from "react";
import { LexicalEntries, Word as WordType } from "../../../features/words/words.types";
import Modal from "../../../utils/Modal/Modal";
import WordDetails from "./WordDetails";

const Word = ({word}:WordType) => {
    const [fullscreen,setFullscreen] = useState<boolean>(false);

    return (
        <div className="word">
            <Modal show={fullscreen}>
               <WordDetails setFullscreen={setFullscreen} word={word}/>
            </Modal>

            <div className="word__card" onClick={() => setFullscreen(true)}>
               <h3 className="word__name">{word.word.id}</h3>
               { 
                  word.word.lexicalEntries.map( (entry:LexicalEntries,i:number) => {
                      return i === 0 ? (
                        <div className="word__meaning" key={entry.lexicalCategory.id}>({entry.lexicalCategory.id}) {entry.entries[0].etymologies[0]}</div>
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
