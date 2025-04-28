export interface Driver {
    id: string;
    fullName: string;
    nationality: string;
    dateOfBirth: string;
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