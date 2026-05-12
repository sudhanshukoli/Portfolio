import { Route, Routes } from 'react-router';
import './App.css';
import Home from './component/Home';
import PortfolioHeader from './component/PortfolioHeader';
import "./fonts.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-200 via-sky-50 to-sky-200 App">
      
      <PortfolioHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
