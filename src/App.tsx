import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drivers from './pages/Drivers';
import DriverDetails from './pages/DriverDetails';
import { DriversProvider } from './contexts/DriversContext';

function App() {
  return (
    <DriversProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Drivers />} />
          <Route path="/drivers/:driverId" element={<DriverDetails />} />
        </Routes>
      </BrowserRouter>
    </DriversProvider>
  );
}

export default App;
