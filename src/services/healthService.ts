import { Config } from "../config";
import { HealthStatusService, HttpStatusCode } from "../interfaces/interfaces";

const handleApiError = (response: Response) => {
    if (!response.ok && response.status !== HttpStatusCode.SERVICE_UNAVAILABLE) {
        throw new Error(`Failed to fetch health data: ${response.statusText}`);
    }
};

/**
 * Fetches the health data from the specified API URL.
 *
 * This function retrieves the health status of various services from the API.
 * It checks if the API URL is defined and handles possible errors during the fetch operation.
 * It also handles "Unhealthy" status (503) as a valid response and only throws an error
 * if the request fails due to other reasons.
 *
 * @returns {Promise<HealthStatusService>} A promise that resolves to the health status of the services.
 * @throws {Error} If the API URL is not defined or if the request fails.
 */
export const fetchHealthData = async (): Promise<HealthStatusService> => {
    const API_URL = Config.API_URL_HEALTH;

    if (!API_URL) {
        throw new Error('API_URL_HEALTH is not defined');
    }

    try {
        const response = await fetch(API_URL);

        handleApiError(response);

        return await response.json();
    } catch (error) {
        console.error('Error fetching health data:', error);
        throw error;
    }
};
