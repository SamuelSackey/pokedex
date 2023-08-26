import { useState } from "react";
import { usePokemonList } from "../hooks/usePokemon";
import { capitalize, getIdFromUrl } from "../utilities";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const PokemonListPage = () => {
  const navigate = useNavigate();
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = usePokemonList(offset);

  return (
    <>
      <header className="flex h-16 items-center justify-between px-3 fixed top-0 left-1/2 transform -translate-x-1/2 w-full">
        <h3 className="text-white pr-2">Pokédex</h3>

        <div>
          <input
            type="search"
            name="search"
            placeholder="Search Pokémon"
            className="sm:w-[30vw] xl:w-96 py-2.5 px-5 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </header>

      <section className="min-h-screen flex flex-col items-center">
        {isLoading ? (
          <div className="pt-[15vh]">
            <Spinner />
          </div>
        ) : (
          <>
            {/* Pokemon Grid */}
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

            {/* Pagination */}
            <div className="flex items-center gap-8 mt-8 mb-3">
              {offset !== 0 && (
                <button
                  onClick={() => setOffset((prev) => prev - 16)}
                  className="border-2 border-white/40 text-white px-6 py-2 rounded hover:opacity-80"
                >
                  Previous
                </button>
              )}

              <button
                onClick={() => setOffset((prev) => prev + 16)}
                className="border-2 border-red-400 px-8 py-2 bg-red-400 text-white rounded hover:opacity-80"
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default PokemonListPage;
