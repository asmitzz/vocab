import Home from "./pages/Home/Home";
import { Routes,Route } from "react-router-dom";

import "./App.css";
// import Search from "./pages/Search/Search";

const App = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/search" element={<Search/>}/> */}
       </Routes>
    </div>
  )
}

export default App;