
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/blog/:id' element={<Blog />}/>
    </Routes>
    
    </BrowserRouter>  
    
    </div>
  );
}

export default App;
