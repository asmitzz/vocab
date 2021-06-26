import { useState } from "react";
import AddToDictionary from "../../components/AddToDictionary/AddToDictionary";
import Header from "../../components/Header/Header";
import WordList from "../../components/WordList/WordList";
import Backdrop from "../../utils/Backdrop/Backdrop";
import "./Home.css";
 
const Home = () => {
    const [search,setSearch] = useState<boolean>(false);
    const [input,setInput] = useState<string>("");
    const [backdrop,setBackdrop] = useState<boolean>(false);

    return (
        <div className="Home">
            <Header search={search} setSearch={setSearch} input={input} setInput={setInput} />
            <WordList search={search} setSearch={setSearch} input={input} />

            <button className="plus__btn" onClick={() => setBackdrop(true)}>
               <i className="fa fa-plus"></i>
            </button>

            <Backdrop show={backdrop}>
                <AddToDictionary setBackdrop={setBackdrop}/>
            </Backdrop>
        </div>
    );
};

export default Home;
