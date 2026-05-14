import { Route, Routes } from 'react-router';
import './App.css';
import Contact from './component/Contact';
import Home from './component/Home';
import Interests from './component/Interests';
import PortfolioHeader from './component/PortfolioHeader';
import "./fonts.css";

function App() {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 App">
      
      <PortfolioHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
