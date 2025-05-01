import { useParams, Link } from 'react-router-dom';
import { useRaces } from '../contexts/RacesContext';
import { useEffect, useState } from 'react';
import { RaceResult } from '../types/races';
import { fetchRaceResults } from '../api/racesApi';
import '../styles/RaceDetails.scss';
import { formatDateTime } from '../utils/formatDate';

function RaceDetails() {
    const { round } = useParams<{ round: string }>();
    const { races, loading } = useRaces();

    const [raceResults, setRaceResults] = useState<RaceResult[] | null>(null);
    const [loadingResults, setLoadingResults] = useState(false);

    const race = races.find(r => r.round === round);
    const raceDate = race ? new Date(`${race.date}T${race.time}`) : null;
    const isPast = raceDate ? raceDate < new Date() : false;
    const formattedDate = raceDate?.toLocaleDateString('lv-LV'); // 13.07.2025
    const formattedTime = raceDate?.toLocaleTimeString('lv-LV', {
        hour: '2-digit',
        minute: '2-digit',
    });



    useEffect(() => {
        if (!race?.circuitId || !isPast) return;

        setLoadingResults(true);
        fetchRaceResults(race.circuitId)
            .then(setRaceResults)
            .catch(err => {
                console.error('Failed to fetch race results:', err);
                setRaceResults(null);
            })
            .finally(() => setLoadingResults(false));
    }, [race?.circuitId, isPast]);

    if (loading) return <div>Loading race details...</div>;
    if (!race) return <div>Race not found</div>;

    return (
        <div className="raceDetailsPage">
            <div className="container">
                <h1>{race.raceName}</h1>
                <p>
                    📍 {race.locality}, {race.country}<br />
                    📅 {formattedDate} — 🕒 {formattedTime}
                </p>

                {/* Sessions (placeholder) */}
                <div className="raceSessions">
                    <h2>Sessions</h2>
                    <ul>
                        <li>🛠️ Practice 1: {formatDateTime(race.firstPracticeDate, race.firstPracticeTime)}</li>
                        <li>🛠️ Practice 2: {formatDateTime(race.secondPracticeDate, race.secondPracticeTime)}</li>
                        <li>🛠️ Qualifying: {formatDateTime(race.qualifyingDate, race.qualifyingTime)}</li>
                        <li>🛠️ Sprint (if applicable): {formatDateTime(race.sprintDate, race.sprintTime)}</li>
                        <li>🛠️ Sprint Qualifying: {formatDateTime(race.sprintQualifyingDate, race.sprintQualifyingTime)}</li>
                        <li>🏁 Race: {raceDate?.toLocaleString('lv-LV', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}</li>
                    </ul>
                </div>

                {isPast && (
                    <div className="raceResults">
                        <h2>Results</h2>
                        {loadingResults && <p>Loading results...</p>}

                        {!loadingResults && raceResults && raceResults.length > 0 && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Pos</th>
                                        <th>Driver</th>
                                        <th>Team</th>
                                        <th>Time</th>
                                        <th>Points</th>
                                        <th>Fastest Lap</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {raceResults.map(res => (
                                        <tr key={res.driverId}>
                                            <td>{res.position}</td>
                                            <td>
                                                <Link to={`/drivers/${res.driverId}`}>
                                                    {res.givenName} {res.familyName}
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to={`/constructors/${res.constructorId}`}>
                                                    {res.constructorName}
                                                </Link>
                                            </td>
                                            <td>{res.time}</td>
                                            <td>{res.points}</td>
                                            <td>{res.fastestLap || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                        {!loadingResults && raceResults?.length === 0 && (
                            <p>No results available for this race.</p>
                        )}
                    </div>
                )}

                {!isPast && <p>⏳ Results will be available after the race.</p>}

                <Link to="/races">← Back to Race List</Link>
            </div>
        </div>
    );
}

export default RaceDetails;
