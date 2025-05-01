import { useRaces } from '../contexts/RacesContext';
import { Link } from 'react-router-dom';
import '../styles/Races.scss';

function Races() {
    const { races, loading } = useRaces();

    if (loading) {
        return <div>Loading races...</div>;
    }

    return (
        <div className="racesPage">
            <div className="container">
                <h1>F1 2025 Race Calendar</h1>
                <ul className="raceList">
                    {races.map((race) => (
                        <li key={race.round} className="raceListItem">
                            <Link to={`/races/${race.round}`}>
                                <strong>{race.raceName}</strong> — {race.locality}, {race.country}
                                <br />
                                <span>{new Date(race.date).toLocaleDateString()}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Races;
