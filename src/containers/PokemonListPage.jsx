import { useState } from "react";
import { usePokemonList, useSearchPokemon } from "../hooks/usePokemon";
import Spinner from "../components/Spinner";
import PokemonListGrid from "../components/PokemonListGrid";
import ErrorNotice from "../components/ErrorNotice";

const PokemonListPage = () => {
  const [offset, setOffset] = useState(0);
  const [searchKey, setSearchKey] = useState("");

  const { data, isLoading, isError, fetchStatus } = usePokemonList(offset);
  const results = useSearchPokemon(searchKey);

  const onSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <>
      {isError || fetchStatus === "paused" ? (
        <ErrorNotice />
      ) : (
        <>
          <header className="flex h-16 items-center justify-between px-3 fixed top-0 left-1/2 transform -translate-x-1/2 w-full">
            <h3 className="text-white pr-2">Pokédex</h3>

            <div>
              <input
                type="search"
                name="search"
                placeholder="Search Pokémon"
                className="sm:w-[30vw] xl:w-96 py-2.5 px-5 rounded-lg text-sm bg-white/5 border-2 border-white/10 text-white focus:outline-none"
                value={searchKey}
                onChange={onSearchChange}
              />
            </div>
          </header>

          <section className="min-h-screen flex flex-col items-center">
            {searchKey.length > 2 ? (
              <>
                <div className="text-white text-xl my-6">{`Search results for "${searchKey}"`}</div>

                {/* Pokemon Grid */}
                <PokemonListGrid data={results} />
              </>
            ) : (
              <>
                {isLoading ? (
                  <div className="pt-[15vh]">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    {/* Pokemon Grid */}
                    <PokemonListGrid data={data} />

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
              </>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default PokemonListPage;
