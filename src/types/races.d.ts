export interface Race {
    season: string;
    round: string;
    raceName: string;
    date: string;
    time: string;
    url: string;
    circuitName: string;
    circuitId: string;
    country: string;
    locality: string;
    firstPracticeDate?: string;
    firstPracticeTime?: string;
    secondPracticeDate?: string;
    secondPracticeTime?: string;
    qualifyingDate?: string;
    qualifyingTime?: string;
    sprintDate?: string;
    sprintTime?: string;
    sprintQualifyingDate?: string;
    sprintQualifyingTime?: string;
}

export interface RaceResult {
    driverId: string;
    familyName: string;
    givenName: string;
    constructorId: string;
    constructorName: string;
    position: string;
    time: string;
    points: number;
    fastestLap?: string;
}
