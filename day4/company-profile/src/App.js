import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Header from './Header';

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Contact/>} />
        <Route path='/contact' element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
