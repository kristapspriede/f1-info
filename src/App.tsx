import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Drivers from './pages/Drivers';
import DriverDetails from './pages/DriverDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drivers />} />
        <Route path="/drivers/:driverId" element={<DriverDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
