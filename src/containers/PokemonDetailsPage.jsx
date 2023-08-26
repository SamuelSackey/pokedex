import React from "react";
import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemon";
import { capitalize, processStats, typeColors } from "../utilities";
import StatBar from "../components/StatBar";
import ErrorNotice from "../components/ErrorNotice";

const PokemonDetailsPage = () => {
  const { name } = useParams();

  const { data, isError, fetchStatus } = usePokemonDetails(name);

  return (
    <>
      {isError || fetchStatus === "paused" ? (
        <ErrorNotice />
      ) : (
        <section className="px-0">
          <div className="flex flex-col items-center">
            {data ? (
              <div className="w-[60%] min-w-[320px] rounded-xl shadow-2xl bg-white/10 text-white overflow-hidden">
                {/* image section */}
                <div
                  className="bg-red-400 flex justify-center"
                  style={{
                    borderRadius: "0 0 64px 64px",
                  }}
                >
                  <img
                    className="w-[40%]"
                    src={data?.sprites?.front_default}
                    alt={name}
                  />
                </div>

                {/* Sub section */}
                <div className="flex flex-col gap-6 px-5 my-6">
                  {/* name section */}
                  <h3 className="text-center">{capitalize(name)}</h3>

                  {/* types section */}
                  <div className="flex flex-wrap gap-8 justify-center">
                    {data?.types?.map((type) => {
                      const slot = type?.slot;
                      const name = type?.type?.name;
                      return (
                        <div
                          key={slot}
                          className={`px-4 py-2 bg-white/40 rounded-md font-medium text-lg`}
                          style={{
                            backgroundColor: typeColors[name],
                          }}
                        >
                          {capitalize(name)}
                        </div>
                      );
                    })}
                  </div>

                  {/* species and weight section */}
                  <div className="container grid grid-cols-2">
                    <div className="flex flex-col gap-1 justify-center">
                      <div className="text-2xl text-center">
                        {data?.weight} KG
                      </div>
                      <div className="font-light text-center">Weight</div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <div className="text-2xl text-center px-4">
                        {data?.species?.name?.toUpperCase()}
                      </div>
                      <div className="font-light text-center">Species</div>
                    </div>
                  </div>

                  {/* stats */}
                  <div>
                    <div className="font-semibold text-xl mb-3 text-center">
                      Stats
                    </div>
                    <div className="container grid grid-cols-[auto_1fr] gap-4 items-center">
                      {data?.stats?.map((stat) => {
                        const { name, color } = processStats(stat?.stat?.name);
                        const value = stat?.base_stat;
                        return (
                          <React.Fragment key={name}>
                            <div className="font-light text-lg">{name}</div>
                            <StatBar value={value} color={color} />
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>

                  {/* moves */}
                  <div>
                    <div className="font-semibold text-xl mb-3 text-center">
                      Moves
                    </div>
                    <div className="flex gap-3 flex-wrap">
                      {data?.moves?.map((move) => {
                        const name = move?.move?.name;
                        return (
                          <div
                            key={name}
                            className="px-3 py-1 rounded-full bg-white/20"
                          >
                            {capitalize(name)}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default PokemonDetailsPage;
