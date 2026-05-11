import './App.css';
import HomeCard from './component/HomeCard';
import PortfolioHeader from './component/PortfolioHeader';
import "./fonts.css";

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-200 via-sky-50 to-sky-200 App">
      <div>
        <PortfolioHeader className="" />
        <HomeCard />
      </div>
    </div>
  );
}

export default App;
