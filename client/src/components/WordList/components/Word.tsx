import { useState } from "react";
import Modal from "../../../utils/Modal/Modal";

const Word = ({word}:any) => {
    const [fullscreen,setFullscreen] = useState<boolean>(false);

    return (
        <div className="word">
            <Modal show={fullscreen}>
               <div className="word__details">
                   <button className="dismiss__btn" onClick={() => setFullscreen(false)}>X</button>
                   <h1 className="word__name">{word.word.id}</h1>
                   { 
                     word.word.lexicalEntries.map( (entry:any,i:number) => {
                         return i === 0 ? (
                           <div key={entry.lexicalCategory.id}>
                               <div className="parts__of__speech">
                                  <h4 className="parts__of__speech__heading">{entry.lexicalCategory.id}</h4> 
                                  <p className="etymologies">Origin {entry.entries[0].etymologies[0]}</p>
                                    {
                                        entry.entries[0].senses.map( (item:any) => (
                                            <div key={item}>
                                                <p className="definitions">{item.definitions[0]}</p>
                                                {item.examples?.map( (ex:any) => (
                                                  <li className="examples" key={ex.text}>{ex.text}</li>
                                                ))}
                                                {
                                                    item.subsenses?.map( (sub:any,i:number) => (
                                                        <div key={sub.definitions}>
                                                          <p className="definitions">{sub.definitions[0]}</p>
                                                          {sub.examples?.map( (ex:any) => (
                                                            <li className="examples" key={ex.text}>{ex.text}</li>
                                                          ))}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                               </div>
                           </div>
                         ) : (
                         <div className="parts__of__speech" key={entry.lexicalCategory.id}>
                             <h4 className="parts__of__speech__heading">{entry.lexicalCategory.id}</h4> 
                             <br/>
                             <p className="definitions">{entry.entries[0].senses[0].definitions[0]}</p>
                             {entry.entries[0].senses[0].examples.map( (ex:any) => (
                                <li className="examples" key={ex.text}>{ex.text}</li>
                             ))}
                         </div>
                       )
                     })
                   }
               </div>
            </Modal>

            <div className="word__card" onClick={() => setFullscreen(true)}>
               <h3 className="word__name">{word.word.id}</h3>
               { 
                  word.word.lexicalEntries.map( (entry:any,i:number) => {
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
