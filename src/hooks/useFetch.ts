import { useState, useEffect } from "react";
import { IGames, IGameData, IScnreenshots } from "../api";

export function useFetch(
  url: string,
): [data: any, error: boolean, loading: boolean] {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    (async (): Promise<void> => {
      setError(false);
      setLoading(true);

      const res = await fetch(url);
      const jsonData = await res.json();
      if (res.ok) setData(jsonData);
      else setError(true);
      if (jsonData.results && jsonData.results.length < 1) setError(true);

      setLoading(false);
    })();
  }, []);

  return [data, error, loading];
}
