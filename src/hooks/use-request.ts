import client from '@/client/client';
import { useEffect, useState } from 'react';

interface UseRequest<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
} 

export const useRequest = <T>(document: string): UseRequest<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    
    useEffect(() => {
        setLoading(true);
        client.request<T>(document)
            .then((response) => {
                setData(response);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [document]);

    return { data, error, loading };
};
