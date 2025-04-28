import { useParams } from 'react-router-dom';
import { useDrivers } from '../contexts/DriversContext';

function DriverDetails() {
  const { driverId } = useParams<{ driverId: string }>();
  const { drivers, loading } = useDrivers();

  if (loading) return <div>Loading...</div>;

  const driver = drivers.find((d) => d.id === driverId);

  if (!driver) return <div>Driver not found</div>;

  return (
    <div>
      <h1>{driver.fullName}</h1>
      <p><strong>Nationality:</strong> {driver.nationality}</p>
      <p><strong>Birth Date:</strong> {driver.birthDate}</p>
      <p><strong>Code:</strong> {driver.code}</p>
      <p><strong>Wikipedia:</strong> <a href={driver.wikiUrl} target="_blank" rel="noreferrer">View</a></p>
    </div>
  );
}

export default DriverDetails;