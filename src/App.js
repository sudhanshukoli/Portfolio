import { Route, Routes } from 'react-router';
import './App.css';
import Contact from './component/Contact';
import Home from './component/Home';
import Interests from './component/Interests';
import PortfolioHeader from './component/PortfolioHeader';
import "./fonts.css";

function App() {
  return (
    <div className=" App">
      <div className='fixed inset-0 -z-10 h-full w-full bg-[#000000] bg-[radial-gradient(125%_125%_at_50%_100%,_#000000_40%,_#350136_100%)] bg-[size:100%_100%]'></div>
      
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
