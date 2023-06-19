import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Image {
  full: string;
  sprite: string;
}
interface Champion {
  key: string;
  id: string;
  name: string;
  tags: string[];
  image: Image;
  title: string;
}

interface DataChampion {
  [key: string]: Champion;
}

interface FetchChampionsResponse {
  page: number;
  data: DataChampion;
}

const useChampions = () => {
  const [champions, setChampions] = useState<DataChampion>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchChampionsResponse>("", { signal: controller.signal })
      .then((res) => setChampions(res.data.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { champions, error };
};

export default useChampions;
