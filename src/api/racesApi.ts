import axios from 'axios';
import { Race, RaceResult } from '../types/races';

const RACES_URL = '/ergast/f1/2025/races/';

/**
 * Fetches all F1 2025 races
 */
export async function fetchRaces(): Promise<Race[]> {
    const response = await axios.get(RACES_URL);
    const rawRaces = response.data.MRData.RaceTable.Races;

    return rawRaces.map((r: any) => ({
        season: r.season,
        round: r.round,
        raceName: r.raceName,
        date: r.date,
        time: r.time,
        url: r.url,
        circuitName: r.Circuit.circuitName,
        circuitId: r.Circuit.circuitId,
        country: r.Circuit.Location.country,
        locality: r.Circuit.Location.locality,
        firstPracticeDate: r.FirstPractice?.date,
        firstPracticeTime: r.FirstPractice?.time,
        secondPracticeDate: r.SecondPractice?.date,
        secondPracticeTime: r.SecondPractice?.time,
        qualifyingDate: r.Qualifying?.date,
        qualifyingTime: r.Qualifying?.time,
        sprintDate: r.Sprint?.date,
        sprintTime: r.Sprint?.time,
        sprintQualifyingDate: r.SprintQualifying?.date,
        sprintQualifyingTime: r.SprintQualifying?.time,
    }));
}

/**
 * Fetches results for a specific race by circuit ID
 */
export async function fetchRaceResults(circuitId: string): Promise<RaceResult[]> {
    const url = `/ergast/f1/2025/circuits/${circuitId}/results/`;
    const response = await axios.get(url);
    const results = response.data.MRData.RaceTable.Races?.[0]?.Results ?? [];

    return results.map((res: any) => ({
        driverId: res.Driver.driverId,
        givenName: res.Driver.givenName,
        familyName: res.Driver.familyName,
        constructorId: res.Constructor.constructorId,
        constructorName: res.Constructor.name,
        position: res.position,
        time: res.Time?.time || 'N/A',
        points: Number(res.points),
        fastestLap: res.FastestLap?.Time?.time,
    }));
}
