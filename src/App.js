import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

//Pages component

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';

 
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/about' end>About</NavLink>
        <NavLink to='/contact' end>Contact</NavLink>
      </nav>

     <Routes>

      <Route path='/' element={<Home />}> </Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/articles/:id' element={<Article />}></Route>
      <Route path='*' element={<Navigate to='/' />}></Route>
     </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
