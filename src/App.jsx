import { useState } from "react";
import { usePokemon } from "./hooks/usePokemon";
import { capitalize, getIdFromUrl } from "./utilities";

function App() {
  const [offset, setOffset] = useState(0);

  const { data } = usePokemon(offset);

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
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8">
          {data?.map((pokemon) => (
            <div
              key={pokemon?.name}
              className="relative pt-[100%] min-w-[100px] rounded-lg bg-red-400"
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
      </section>
    </>
  );
}

export default App;
