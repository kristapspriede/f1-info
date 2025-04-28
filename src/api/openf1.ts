import axios from 'axios';
import { mapDriver, Driver } from './mappers/driverMapper';
import { DriversResponse } from '../types/openf1';

const API_BASE = '/ergast/f1/2025';

export async function getDrivers(): Promise<Driver[]> {
    const response = await axios.get<DriversResponse>(`${API_BASE}/drivers`);
    return response.data.MRData.DriverTable.Drivers.map(mapDriver);
}