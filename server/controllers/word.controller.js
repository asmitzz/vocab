const Words = require("../models/word.model");
const axios = require("axios");

const getAllWords = async(req,res) => {
    const words = await Words.find({}).lean();
    res.status(200).json({ words })
}

const addWord = async(req,res) => {
   const { word } = req.body;

   try {
    const { data } = await axios.get(`${process.env.OXFORD_API}/${word}`,{
        headers:{
           app_id:process.env.APP_ID,
           app_key:process.env.APP_KEY
        }
    })
    const getWordFromOxfordApi = data.results[0];

    const saveWord = await Words({
        word:getWordFromOxfordApi
    }).save();
 
    res.status(201).json({ word:saveWord, message:"word added successfully" })

   } catch (error) {
       res.status(404).json({ message:"word not found" })
   }
}

module.exports = { getAllWords,addWord };