import axios from 'axios';
import { Driver, Constructor } from '../types/standings';

const DRIVER_STANDINGS_URL = '/ergast/f1/2025/driverstandings/';
const CONSTRUCTOR_STANDINGS_URL = '/ergast/f1/2025/constructorstandings/';

export async function fetchStandings(): Promise<{ drivers: Driver[]; constructors: Constructor[] }> {
    const [driverResponse, constructorResponse] = await Promise.all([
        axios.get(DRIVER_STANDINGS_URL),
        axios.get(CONSTRUCTOR_STANDINGS_URL)
    ]);

    const driverData = driverResponse.data;
    const constructorData = constructorResponse.data;

    // === Mapping Constructors ===
    const constructors: Constructor[] = constructorData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings.map((item: any) => ({
        id: item.Constructor.constructorId,
        name: item.Constructor.name,
        nationality: item.Constructor.nationality,
        points: Number(item.points),
        wins: Number(item.wins),
    }));

    // === Mapping Drivers ===
    const drivers: Driver[] = driverData.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((item: any) => {
        const latestConstructor = item.Constructors[item.Constructors.length - 1];

        return {
            id: item.Driver.driverId,
            fullName: `${item.Driver.givenName} ${item.Driver.familyName}`,
            nationality: item.Driver.nationality,
            dateOfBirth: item.Driver.dateOfBirth,
            teamId: latestConstructor.constructorId,
            teamName: latestConstructor.name,
            points: Number(item.points),
            wins: Number(item.wins),
            position: Number(item.position),
        };
    });

    return { drivers, constructors };
}
