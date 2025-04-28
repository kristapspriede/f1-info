import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDrivers } from '../api/openf1';
import { Driver } from '../api/mappers/driverMapper';

function DriverDetails() {
    const { driverId } = useParams<{ driverId: string }>();
    const [driver, setDriver] = useState<Driver | null>(null);

    useEffect(() => {
        getDrivers().then((drivers) => {
            const foundDriver = drivers.find((d) => d.id === driverId);
            setDriver(foundDriver || null);
        });
    }, [driverId]);

    if (!driver) {
        return <div>Loading...</div>;
    }

    return (
        <div className="DriverDetails">
            <h1>{driver.fullName}</h1>
            <p><strong>Nationality:</strong> {driver.nationality}</p>
            <p><strong>Birth Date:</strong> {driver.birthDate}</p>
            <p><strong>Wiki:</strong> <a href={driver.wikiUrl} target="_blank" rel="noreferrer">Wikipedia</a></p>
        </div>
    );
}

export default DriverDetails;