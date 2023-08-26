import {} from "react";
import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemon";

const PokemonDetailsPage = () => {
  const { name } = useParams();

  const { data } = usePokemonDetails(name);

  return (
    <>
      <section className="px-0">
        <div className="flex flex-col items-center">
          <div className="w-[60%] min-w-[320px] rounded-xl p-5 shadow-2xl bg-white/10 text-white">
            {JSON.stringify(name)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PokemonDetailsPage;
