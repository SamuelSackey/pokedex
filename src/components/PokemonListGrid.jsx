import { useNavigate } from "react-router-dom";
import { capitalize, getIdFromUrl } from "../utilities";

const PokemonListGrid = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8">
      {data?.map((pokemon) => (
        <div
          key={pokemon?.name}
          onClick={() => {
            navigate(`/pokemon/${pokemon?.name}`);
          }}
          className="relative pt-[100%] min-w-[100px] rounded-lg bg-red-400 shadow"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              className="w-9/12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdFromUrl(
                pokemon?.url
              )}.png`}
              alt={pokemon?.name}
            />
            <div className="font-medium text-lg">
              {capitalize(pokemon?.name)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonListGrid;
