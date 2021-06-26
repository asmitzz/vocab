import { useState } from "react";
import Header from "../../components/Header/Header";
import WordList from "../../components/WordList/WordList";
import "./Home.css";
 
const Home = () => {
    const [search,setSearch] = useState<boolean>(false);
    const [input,setInput] = useState<string>("");

    return (
        <div className="Home">
            <Header search={search} setSearch={setSearch} input={input} setInput={setInput} />
            <WordList search={search} setSearch={setSearch} input={input} />
        </div>
    );
};

export default Home;
