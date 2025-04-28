import { DriverApiResponse } from '../../types/openf1';

export interface Driver {
    id: string;
    fullName: string;
    code: string;
    nationality: string;
    birthDate: string;
    wikiUrl: string;
}

export function mapDriver(apiDriver: DriverApiResponse): Driver {
    return {
        id: apiDriver.driverId,
        fullName: `${apiDriver.givenName} ${apiDriver.familyName}`,
        code: apiDriver.code,
        nationality: apiDriver.nationality,
        birthDate: apiDriver.dateOfBirth,
        wikiUrl: apiDriver.url,
    };
}