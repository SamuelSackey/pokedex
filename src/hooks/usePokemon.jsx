import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePokemon = (offset) => {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
      );

      return data.results;
    },
  });
};
