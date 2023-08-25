import { useState } from "react";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const [offset, setOffset] = useState(0);

  const { data } = usePokemon(offset);

  return (
    <div>
      <header className="flex h-16 items-center justify-between px-8 fixed top-0 left-1/2 transform -translate-x-1/2 w-full">
        <h3 className="text-white">Pokédex</h3>

        <div>
          <input
            type="search"
            name="search"
            placeholder="Search Pokémon"
            className="py-3 px-5 rounded-lg text-sm focus:outline-none"
          />
        </div>
      </header>

      <section className="min-h-screen flex flex-col items-center">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-8">
          {data?.map((pokemon) => (
            <div key={pokemon?.name} className="bg-red-400">
              {pokemon.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
