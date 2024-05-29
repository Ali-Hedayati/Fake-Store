import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<T[]>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        setError("");
        console.log("in usedata: ", res);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return null;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { data, isLoading, error };
};

export default useData;
