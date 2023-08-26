import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// for testing only
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const usePokemonList = (offset) => {
  return useQuery({
    queryKey: [offset],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`
      );

      return data.results;
    },
  });
};

export const usePokemonDetails = (name) => {
  return useQuery({
    queryKey: [name],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      return data;
    },
  });
};
