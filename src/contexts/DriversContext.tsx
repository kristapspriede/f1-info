import { createContext, useContext, useEffect, useState } from 'react';
import { getDrivers } from '../api/openf1';
import { Driver } from '../api/mappers/driverMapper';

interface DriversContextType {
    drivers: Driver[];
    loading: boolean;
}

const DriversContext = createContext<DriversContextType>({
    drivers: [],
    loading: true,
});

export function DriversProvider({ children }: { children: React.ReactNode }) {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDrivers()
            .then((data) => {
                setDrivers(data);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <DriversContext.Provider value={{ drivers, loading }}>
            {children}
        </DriversContext.Provider>
    );
}

export function useDrivers() {
    return useContext(DriversContext);
}