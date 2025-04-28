import { useDrivers } from '../contexts/DriversContext';
import { Link } from 'react-router-dom';

function Drivers() {
  const { drivers, loading } = useDrivers();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
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