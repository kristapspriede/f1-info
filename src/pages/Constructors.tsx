import { useStandings } from '../contexts/StandingsContext';
import { Link } from 'react-router-dom';

function Constructors() {
    const { constructors, loading } = useStandings();

    if (loading) {
        return <div>Loading constructors...</div>;
    }

    // Sort constructors by points descending
    const sortedConstructors = [...constructors].sort((a, b) => b.points - a.points);

    return (
        <div className="ConstructorsPage">
            <h1>F1 2025 Constructors Standings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Constructor</th>
                        <th>Points</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedConstructors.map((constructor, index) => (
                        <tr key={constructor.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Link to={`/constructors/${constructor.id}`}>
                                    {constructor.name}
                                </Link>
                            </td>
                            <td>{constructor.points}</td>
                            <td>{constructor.wins}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button><Link to="/">← Back to Drivers</Link></button>

        </div>
    );
}

export default Constructors;
