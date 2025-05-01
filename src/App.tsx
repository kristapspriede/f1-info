import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StandingsProvider } from './contexts/StandingsContext';
import Drivers from './pages/Drivers';
import DriverDetails from './pages/DriverDetails';
import Constructors from './pages/Constructors';
import ConstructorDetails from './pages/ConstructorDetails';
import Navbar from './components/Navbar';
import { RacesProvider } from './contexts/RacesContext';
import Races from './pages/Races';
import RaceDetails from './pages/RaceDetails';

function App() {
  return (
    <StandingsProvider>
      <RacesProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Drivers />} />
          <Route path="/drivers/:driverId" element={<DriverDetails />} />
          <Route path="/constructors" element={<Constructors />} />
          <Route path="/constructors/:constructorId" element={<ConstructorDetails />} />
          <Route path="/races" element={<Races />} />
          <Route path="/races/:round" element={<RaceDetails />} />
        </Routes>
      </BrowserRouter>
      </RacesProvider>
    </StandingsProvider>
  );
}

export default App;