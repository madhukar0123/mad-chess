import React from "react";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

function Moves() {
  const { game } = useSelector((state) => state.chess);

  // Getting the history method from game object
  const history = Object.keys(game).length !== 0 && game.history();

  // Player1 moves
  const evens = history && history?.filter((h, i) => i % 2 == 0);

  // Player2 moves
  const odds = history && history?.filter((h, i) => i % 2 !== 0);

  return (
    <>
      <h2 className="mt-4 flex justify-center">Positions</h2>
      <div className=" justify-start overflow-scroll w-full h-3/5 sm:min-h-10  align-middle overflow-auto mb-4 bg-white dark:bg-gray-600 dark:border-gray-600 relative">
        <div className="w-full h-full">
          <div
            className="flex text-xs lg:text-sm justify-start gap-10 text-left w-full align-top flex-row p-1 bg-gray-500 dark:bg-gray-900 "
          >
            <div className="w-12">No</div>
            <div className="w-12">Me</div>
            <div className="w-12">Computer</div>
          </div>
          {evens.length > 0 && (
            <>

              {/* looping through moves array  */}
              {evens.map((h, i) => {
                return (
                  <div
                    key={i}
                    className="flex text-xs lg:text-sm justify-start gap-10 text-left w-full align-top flex-row p-1 mt-1 bg-gray-400/30 dark:bg-gray-900/30 "
                  >
                    {/* Showing moves in three column layout */}
                    {evens[i] !== undefined || odds[i] !== undefined ? (
                      <>
                        <div className="w-12">{i + 1}</div>
                        <div className="w-12">{evens[i]}</div>
                        <div className="w-12">
                          {odds[i] !== undefined ? (
                            odds[i]
                          ) : (
                            // loader
                            <ThreeDots
                              height="24"
                              width="24"
                              color="#4fa94d"
                              ariaLabel="three-dots-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                            />
                          )}
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Moves;
