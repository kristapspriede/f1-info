import { useParams, Link } from 'react-router-dom';
import { useStandings } from '../contexts/StandingsContext';

function ConstructorDetails() {
    const { constructorId } = useParams<{ constructorId: string }>();
    const { drivers, constructors, loading } = useStandings();

    if (loading) {
        return <div>Loading constructor details...</div>;
    }

    const constructor = constructors.find(c => c.id === constructorId);

    if (!constructor) {
        return <div>Constructor not found.</div>;
    }

    const teamDrivers = drivers.filter(d => d.teamId === constructorId);

    return (
        <div className="ConstructorDetailsPage">
            <h1>{constructor.name}</h1>
            <p><strong>Nationality:</strong> {constructor.nationality}</p>
            <p><strong>Points:</strong> {constructor.points}</p>
            <p><strong>Wins:</strong> {constructor.wins}</p>

            <h2>Drivers</h2>
            <ul>
                {teamDrivers.map(driver => (
                    <li key={driver.id}>
                        <Link to={`/drivers/${driver.id}`}>
                            {driver.fullName}
                        </Link>
                    </li>
                ))}
            </ul>

            <button>
                <Link to="/constructors">← Back to Constructors</Link>
            </button>

        </div>
    );
}

export default ConstructorDetails;