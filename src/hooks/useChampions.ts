import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { image } from "../const";

export interface Champion {
  key: string;
  id: string;
  name: string;
  tags: string[];
  title: string;
  image: string;
}

interface DataChampion {
  [key: string]: Champion;
}

interface FetchChampionsResponse {
  page: number;
  data: DataChampion;
}

const useChampions = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchChampionsResponse>("/13.12.1/data/it_IT/champion.json", { signal: controller.signal })
      .then((res) => {
        const champions = res.data.data;
        const newChampions = Object.entries(champions).map(([, value]) => {
          return { ...value, image: `${image}/${value.id}_0.jpg` };
        });
        setChampions(newChampions);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { champions, error };
};

export default useChampions;
