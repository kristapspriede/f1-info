import { useEffect, useState } from 'react';
import { getDrivers } from '../api/openf1';
import { Driver } from '../api/mappers/driverMapper';
import { Link } from 'react-router-dom';

function Drivers() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    getDrivers().then(setDrivers);
  }, []);

  return (
    <div className="DriversPage">
      <h1>Drivers 2025</h1>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            <Link to={`/drivers/${driver.id}`}>
              {driver.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Drivers;