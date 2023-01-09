import { useState, useEffect } from "react";
import { IGames, IGameData, IScnreenshots } from "../api";

// fetch list of games
export function useFetch(url: string): [data: any, error: boolean, loading: boolean] {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      setError(false);
      setLoading(true);
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    })();
  }, []);

  return [data, error, loading];
}