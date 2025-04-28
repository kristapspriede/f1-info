export interface DriverApiResponse {
    driverId: string;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
}

export interface DriversResponse {
    MRData: {
        DriverTable: {
            Drivers: DriverApiResponse[];
        };
    };
}
