import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

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
        <NavLink exact to='/' end>Home</NavLink>
        <NavLink exact to='/about' end>About</NavLink>
        <NavLink exact to='/contact' end>Contact</NavLink>
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
