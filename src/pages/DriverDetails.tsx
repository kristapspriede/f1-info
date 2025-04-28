import { useParams, Link } from 'react-router-dom';
import { useStandings } from '../contexts/StandingsContext';

function DriverDetails() {
  const { driverId } = useParams<{ driverId: string }>();
  const { drivers, loading } = useStandings();

  if (loading) {
    return <div>Loading driver details...</div>;
  }

  const driver = drivers.find((d) => d.id === driverId);

  if (!driver) {
    return <div>Driver not found.</div>;
  }

  return (
    <div className="DriverDetailsPage">
      <h1>{driver.fullName}</h1>

      <img
        src={`https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/drivers/2025Drivers/${driver.familyName}`}
        alt={driver.fullName}
        style={{ maxWidth: '300px', height: 'auto', marginBottom: '1rem' }}
      />

      <p><strong>Nationality:</strong> {driver.nationality}</p>
      <p><strong>Date of Birth:</strong> {driver.dateOfBirth}</p>
      <p><strong>Team:</strong> <Link to={`/constructors/${driver.teamId}`}>{driver.teamName}</Link></p>
      <p><strong>Points:</strong> {driver.points}</p>
      <p><strong>Wins:</strong> {driver.wins}</p>
      <p><strong>Season Position:</strong> {driver.position}</p>

      <button><Link to="/">Back</Link></button>
    </div>
  );
}

export default DriverDetails;