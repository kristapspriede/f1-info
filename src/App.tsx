import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StandingsProvider } from './contexts/StandingsContext';
import Drivers from './pages/Drivers';
import DriverDetails from './pages/DriverDetails';
import Constructors from './pages/Constructors';
import ConstructorDetails from './pages/ConstructorDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <StandingsProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Drivers />} />
          <Route path="/drivers/:driverId" element={<DriverDetails />} />
          <Route path="/constructors" element={<Constructors />} />
          <Route path="/constructors/:constructorId" element={<ConstructorDetails />} />
        </Routes>
      </BrowserRouter>
    </StandingsProvider>
  );
}

export default App;