import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import axios from "axios";

export const fetchWords = createAsyncThunk("words/fetchwords",async() => {
    const res = await axios.get(`${BASE_URL}/words`);
    return res.data;
});

export const addWord = createAsyncThunk<any,{ word:string}>("words/addword",async({word}) => {
    const res = await axios.post(`${BASE_URL}/words`,{ word });
    return res.data;
});

const initialState:any = {
    words:[],
    status:"idle"
}

const wordsSlice = createSlice({
    name:"words",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchWords.fulfilled,(state,action) => {
             state.status = "succeeded";
             state.words = action.payload.words;
        })
        builder.addCase(fetchWords.pending,(state) => {
            state.status = "pending";
        })
        builder.addCase(fetchWords.rejected,(state) => {
            state.status = "failed";
        })
        builder.addCase(addWord.fulfilled,(state,action) => {
            const { word } = action.payload;
            state.words.push(word);
        })
    }
})

export default wordsSlice.reducer; 