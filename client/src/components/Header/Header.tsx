import { Dispatch, SetStateAction } from "react";
import "./Header.css";

type HeaderProps = {
    search:boolean;
    setSearch:Dispatch<SetStateAction<boolean>>;
    input:string;
    setInput:Dispatch<SetStateAction<string>>;
}

const Header = ({ search,setSearch,input,setInput }:HeaderProps) => {

    return (
      <div className="header__container">  
        { !search ?
        (
        <header className="header">
           <h2>Vocab</h2>
           <button className="header__btn" onClick={() => setSearch(true)}>
              <i className="fa fa-search"></i>
           </button>
        </header>
        ) : 
        (
          <header className="header">
            <input type="text" autoFocus className="search__box" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="header__btn" onClick={() => setSearch(false)}>X</button>
          </header>
        )
        }
 
        { !search && <div className="WordList__heading">Words List</div>}
      </div>
    );
};

export default Header;
