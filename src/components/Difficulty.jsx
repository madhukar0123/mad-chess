import React, { useState } from "react";
import { difficulties } from "@constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setStockfishLevel,
  setRestartModel,
  setGamePosition,
  setUserWon,
} from "@reducers/ChessReducer";
import Modal from "@components/Modal";
import { PiFireSimple } from "react-icons/pi";
import { PiFireBold } from "react-icons/pi";
import { PiFireDuotone } from "react-icons/pi";



function Evaluation() {
  const dispatch = useDispatch();
  const { stockfishLevel, game, restartModel } = useSelector(
    (state) => state.chess
  );

  const [level, setLevel] = useState(stockfishLevel);

  return (
    <>
      <div className=" flex flex-row h-10 justify-center">
        <h2 className="mt-2">Easy</h2>
        <div className="inline-flex ml-2 rounded-md shadow-sm" role="group">
          {/* Get difficulties object from contacts and loop */}
          {Object.entries(difficulties).map(([level, depth], i, arr) => (
            <button type="button" onClick={() => {
              setLevel(depth);
              dispatch(setRestartModel(true));
            }} className={`inline-flex items-center text-xl px-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 ${!i?`rounded-s-lg`: ``} ${arr.length-1== i?`rounded-e-lg`:`` } hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${depth === stockfishLevel
                ? ` bg-yellow-600  dark:bg-yellow-600 hover:bg-yellow-500 dark:hover:bg-yellow-500`
                : `bg-slate-600`
              }`}>
              {level=='Easy'? <PiFireSimple />: level=="Hard"? <PiFireDuotone /> : <PiFireBold />}
              <span className="mt-1 ml-1"></span>
            </button>
          ))}
        </div>
        <h2 className="mt-2 ml-1">Hard</h2>
      </div>

      {/* Modal to show confirmation of updating the difficulty */}

      <Modal open={restartModel}>
        <div className=" w-96 rounded-xl p-10 bg-gray-300 text-black dark:text-white dark:bg-gray-900 flex items-center flex-wrap flex-col">
          <h3 className="text-2xl mb-4">
            Do you want to change the difficulty level and restart?
          </h3>
          <div className="px-4 flex items-center align-middle gap-5 justify-center">
            <button
              onClick={() => {
                // reset game
                game.reset();
                // updating the difficulty level in redux store
                dispatch(setStockfishLevel(level));

                dispatch(setGamePosition(game.fen()));
                dispatch(setRestartModel(false));
                dispatch(setUserWon(false));
              }}
              className="bg-lime-600 w-24 drop-shadow-[0_5px_0px_rgba(0,0,0,0.8)]  py-2 rounded-lg hover:bg-lime-700 transition-all"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                dispatch(setRestartModel(false));
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Evaluation;
