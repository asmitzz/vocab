import { Status } from "../../generic.types";

export type Examples = {
    text:string;
}

export type Subsenses = {
    definitions:string[];
    examples:Examples[];
}

export type Senses = {
    definitions:string[];
    examples:Examples[];
    subsenses:Subsenses[];
}

export type Entries = {
    etymologies:string[];
    senses:Senses[];
}

export type LexicalEntries = {
    lexicalCategory:{
        id:string;
    };
    entries:Entries[];
} 

export type WordType = {
    id:string;
    lexicalEntries:LexicalEntries[];
}

export type Word = {
    word:WordType;
    _id:string;
}

export type WordsInitialState = {
    words:Word[];
    status:Status;
}

export type WordsResponse = {
    words:Word[];
}