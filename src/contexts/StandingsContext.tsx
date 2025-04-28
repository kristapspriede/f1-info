import { createContext, useContext, useEffect, useState } from 'react';
import { Driver, Constructor } from '../types/standings';
import { fetchStandings } from '../api/standingsApi';

interface StandingsContextType {
    drivers: Driver[];
    constructors: Constructor[];
    loading: boolean;
}

const StandingsContext = createContext<StandingsContextType>({
    drivers: [],
    constructors: [],
    loading: true,
});

export function StandingsProvider({ children }: { children: React.ReactNode }) {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [constructors, setConstructors] = useState<Constructor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                // We will implement fetchStandings() soon
                const { drivers, constructors } = await fetchStandings();
                setDrivers(drivers);
                setConstructors(constructors);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <StandingsContext.Provider value={{ drivers, constructors, loading }}>
            {children}
        </StandingsContext.Provider>
    );
}

export function useStandings() {
    return useContext(StandingsContext);
}
