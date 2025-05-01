import { useStandings } from '../contexts/StandingsContext';
import { Link } from 'react-router-dom';

function Drivers() {
    const { drivers, loading } = useStandings();

    if (loading) {
        return <div>Loading drivers...</div>;
    }

    // Sort drivers by points (highest first)
    const sortedDrivers = [...drivers].sort((a, b) => b.points - a.points);

    return (
        <div className="DriversPage">
            <div className="container">
                <h1>F1 2025 Driver Standings</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Driver</th>
                            <th>Team</th>
                            <th>Points</th>
                            <th>Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedDrivers.map((driver) => (
                            <tr key={driver.id}>
                                <td>{driver.position}</td>
                                <td>
                                    <Link to={`/drivers/${driver.id}`}>
                                        {driver.fullName}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/constructors/${driver.teamId}`}>
                                        {driver.teamName}
                                    </Link>
                                </td>
                                <td>{driver.points}</td>
                                <td>{driver.wins}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Drivers;