import { useState, useEffect } from "react";
import { IGames } from "../api";

export default function useFetch(url: string): ([
  data: IGames | null,
  error: boolean,
  loading: boolean,
]) {
  const [data, setData] = useState<IGames | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(url);
        const jsonData: IGames = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return [data, error, loading];
}