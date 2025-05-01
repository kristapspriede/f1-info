import { createContext, useContext, useEffect, useState } from 'react';
import { Race } from '../types/races';
import { fetchRaces } from '../api/racesApi';

interface RacesContextType {
  races: Race[];
  loading: boolean;
}

const RacesContext = createContext<RacesContextType>({
  races: [],
  loading: true,
});

export function RacesProvider({ children }: { children: React.ReactNode }) {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRaces().then(setRaces).finally(() => setLoading(false));
  }, []);

  return (
    <RacesContext.Provider value={{ races, loading }}>
      {children}
    </RacesContext.Provider>
  );
}

export function useRaces() {
  return useContext(RacesContext);
}
