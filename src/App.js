import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages component

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>

     <Routes>

      <Route path='/' element={<Home />}> </Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      
     </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
