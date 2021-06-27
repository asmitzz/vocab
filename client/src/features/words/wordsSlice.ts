import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { Word, WordsInitialState, WordsResponse } from "./words.types";

import axios from "axios";

export const fetchWords = createAsyncThunk<WordsResponse>("words/fetchwords",async() => {
    const res = await axios.get(`${BASE_URL}/words`);
    return res.data;
});

export const addWord = createAsyncThunk<{word:Word},{ word:string}>("words/addword",async({word}) => {
    const res = await axios.post(`${BASE_URL}/words`,{ word });
    return res.data;
});

const initialState:WordsInitialState = {
    words:[],
    status:"idle"
}

const wordsSlice = createSlice({
    name:"words",
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder.addCase(fetchWords.fulfilled,(state:WordsInitialState,action:PayloadAction<WordsResponse>) => {
             state.status = "succeeded";
             state.words = action.payload.words;
        })
        builder.addCase(fetchWords.pending,(state:WordsInitialState) => {
            state.status = "pending";
        })
        builder.addCase(fetchWords.rejected,(state:WordsInitialState) => {
            state.status = "failed";
        })
        builder.addCase(addWord.fulfilled,(state:WordsInitialState,action:PayloadAction<{word:Word}>) => {
            const { word } = action.payload;
            state.words.push(word);
        })
    }
})

export default wordsSlice.reducer; 