export interface Driver {
    id: string;
    fullName: string;
    givenName: string;
    familyName: string;
    nationality: string;
    dateOfBirth: string;
    number: string;
    teamId: string;
    teamName: string;
    points: number;
    wins: number;
    position: number;
}

export interface Constructor {
    id: string;
    name: string;
    nationality: string;
    points: number;
    wins: number;
}