import { Word } from "../../features/words/words.types";

export const checkWord = (words:Word[],word:string):boolean => {
     return words.some( w => w.word.id.toLowerCase() === word.toLowerCase())
}