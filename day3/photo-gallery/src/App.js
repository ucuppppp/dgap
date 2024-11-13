import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Contact from "./Contact";
import About from "./About";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail />}/>
      </Routes>
    </Router>
  )
}

export default App;
