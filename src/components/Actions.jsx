import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGamePosition,
  setResignModel,
  setUserWon,
} from "@reducers/ChessReducer.js";
import Modal from "@components/Modal.jsx";
import { useNavigate } from "react-router-dom";
import { SiProbot } from "react-icons/si";
import { IoMdExit } from "react-icons/io";
import { GrRevert } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";


function Actions() {
  const dispatch = useDispatch();
  const { game, resignModal, userWon } = useSelector((state) => state.chess);
  const navigate = useNavigate();
  return (
    <>
    {/* Button Group for all the Actions */}
      <div className="inline-flex rounded-md shadow-sm" role="group"> 
        <button type="button" title="New Match" onClick={() => {
            game.reset();
            dispatch(setGamePosition(game.fen()));
          }} className="inline-flex items-center text-xl px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
          <IoAddCircleOutline/>
          <span className="mt-1 ml-1"></span>
        </button>
        <button type="button" title="Move Back" onClick={() => {
            game.undo();
            game.undo();
            dispatch(setGamePosition(game.fen()));
          }} className="inline-flex text-xl items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        <GrRevert/>
        </button>
        <button type="button" title="Resign" onClick={() => dispatch(setResignModel(true))} className="inline-flex text-xl items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-500 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
        <IoMdExit/>
        </button>
      </div>


      {/* Modal to show message on resign */}
      <Modal open={resignModal}>
        <div className=" text-black dark:text-white rounded-xl w-auto p-10 bg-gray-300 dark:bg-gray-950 flex items-center flex-wrap flex-col">
          <div className="my-4 text-xl px-4">
            {userWon ? (
              <>
                <p className="text-4xl mb-2">Congratulations...!</p>
                <h2>let's play again </h2>
              </>
            ) : (
              <>
                <div className="flex flex-col text-center gap-2">
                  <SiProbot className="w-full h-28" />
                  <h2> I am just warming up </h2>
                </div>
              </>
            )}
          </div>
          <div className="px-4 flex items-center align-middle gap-5 justify-center">
            <button
              onClick={() => {
                game.reset();
                dispatch(setGamePosition(game.fen()));
                dispatch(setResignModel(false));
                dispatch(setUserWon(false));
              }}
              className="w-full px-4 bg-yellow-600 border-dotted border-yellow-900 border-4 dark:bg-yellow-600 drop-shadow-[0_5px_0px_rgba(133,87,0,0.8)] py-2 rounded-lg  transition-all"
            >
              Rematch
            </button>
            <button
              onClick={() => {
                game.reset();
                dispatch(setGamePosition(game.fen()));
                dispatch(setResignModel(false));
                dispatch(setUserWon(false));
                navigate("/");
              }}
              className="w-full  py-3  px-4   rounded-md drop-shadow-[0_5px_0px_rgba(0,0,0,0.8)] shadow-gray-600 bg-gray-950 text-white
              dark:bg-gray-300 dark:text-black hover:bg-gray-900"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                dispatch(setResignModel(false));
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

export default Actions;
