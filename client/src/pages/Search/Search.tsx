import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
    return (
        <div>
            <div className="header__container">  
              <header className="header">
                 <input type="text"/>
                 <Link to="/" className="dismiss__btn">X</Link>
              </header>
            </div>
        </div>
    );
};

export default Search;
