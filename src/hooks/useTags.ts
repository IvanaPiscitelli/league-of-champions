// Creare una funzione che prende input un array di oggetti. Scorrere questo array,salvare in un nuovo array tutti i valori della prop tags. Reminder: eliminare tutti i tag duplicati e la prop tags è un array di string.

import useChampions from "./useChampions";

const useTags = () => {
  const { champions, error, isLoading } = useChampions();

  const tags: string[] = [];

  champions.map((champion) => {
    champion.tags.forEach((tag) => {
      tags.push(tag);
    });
  });
  const uniqueTags = Array.from(new Set(tags)); // Remove duplicated values array.from create a new array

  return { uniqueTags, error, isLoading };
};

export default useTags;
