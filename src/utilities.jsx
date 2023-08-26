export const getIdFromUrl = (url) => {
  const match = url?.match(/\/(\d+)\/$/);
  return match ? match[1] : null;
};

export const capitalize = (string) =>
  string
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const processStats = (stat) => {
  switch (stat) {
    case "hp":
      return {
        name: "HP",
        color: "bg-red-500",
      };
    case "attack":
      return {
        name: "ATTACK",
        color: "bg-blue-500",
      };
    case "defense":
      return {
        name: "DEFENSE",
        color: "bg-purple-500",
      };
    case "special-attack":
      return {
        name: "SPECIAL ATK",
        color: "bg-orange-500",
      };
    case "special-defense":
      return {
        name: "SPECIAL DEF",
        color: "bg-green-500",
      };
    case "speed":
      return {
        name: "SPEED",
        color: "bg-yellow-500",
      };
    default:
      return {};
  }
};

export const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};
