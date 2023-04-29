import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
    id: number,
    name: string,
}

interface FetchedGenreResponse {
    count: number,
    results: Genre[]
}

const useGenre = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchedGenreResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setLoading(false);
                setGenre(res.data.results);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading }
}

export default useGenre;