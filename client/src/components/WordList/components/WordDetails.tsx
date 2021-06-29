import { nanoid } from "nanoid";
import { Dispatch, SetStateAction } from "react";
import {
  Examples,
  LexicalEntries,
  Senses,
  Subsenses,
  WordType,
} from "../../../features/words/words.types";

type WordDetailsProps = {
  setFullscreen:Dispatch<SetStateAction<boolean>>;
  word:WordType;
}

const WordDetails = ({ setFullscreen, word }: WordDetailsProps) => {
  const getMeaning = (entry:LexicalEntries) => {
    if(entry.entries[0].etymologies){
       return `Origin ${entry?.entries[0].etymologies[0]}`
    }
 }
  return (
    <div className="word__details">
      <button className="dismiss__btn" onClick={() => setFullscreen(false)}>
        X
      </button>
      <h1 className="word__name">{word.id}</h1>
      {word.lexicalEntries.map((entry: LexicalEntries, i: number) => {
        return i === 0 ? (
          <div key={entry.lexicalCategory.id}>
            <div className="parts__of__speech">
              <h4 className="parts__of__speech__heading">
                {entry.lexicalCategory.id}
              </h4>
              <p className="etymologies">
                 {getMeaning(entry)}
              </p>
              {entry.entries[0].senses.map((item: Senses) => (
                <div key={nanoid()}>
                  <p className="definitions">{item.definitions[0]}</p>
                  {item.examples?.map((ex: Examples) => (
                    <li className="examples" key={ex.text}>
                      {ex.text}
                    </li>
                  ))}
                  {item.subsenses?.map((sub: Subsenses, i: number) => (
                    <div key={nanoid()}>
                      <p className="definitions">{sub.definitions[0]}</p>
                      {sub.examples?.map((ex: Examples) => (
                        <li className="examples" key={ex.text}>
                          {ex.text}
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="parts__of__speech" key={nanoid()}>
            <h4 className="parts__of__speech__heading">
              {entry.lexicalCategory.id}
            </h4>
            <br />
            <p className="definitions">
              {entry.entries[0].senses[0].definitions[0]}
            </p>
            {entry.entries[0].senses[0].examples.map((ex: Examples) => (
              <li className="examples" key={ex.text}>
                {ex.text}
              </li>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default WordDetails;
