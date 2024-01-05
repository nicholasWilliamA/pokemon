import axios, { AxiosRequestConfig } from 'axios';

export function CreateFetcher() {
    return async (url: string, configs?: AxiosRequestConfig) => {
        const config: AxiosRequestConfig = {
            ...configs,
            headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: '0',
            },
        };
        const response = await axios.get(url, config);

        return response.data;
    };
}

export const Fetcher = CreateFetcher();
