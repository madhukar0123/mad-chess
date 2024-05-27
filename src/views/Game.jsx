import { useState, useMemo, useEffect } from "react";
import { Chess } from "chess.js";
import Engine from "/public/Engine";
import { SiProbot } from "react-icons/si";
import {
  setGamePosition,
  setGameObj,
  setEngineObj,
  setUserWon,
} from "@reducers/ChessReducer.js";
import { useDispatch } from "react-redux";
import ActionsPanel from "@components/ActionsPanel.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from "@components/Avatar.jsx";
import ChessBoard from "@components/ChessBoard.jsx";
import Layout from "@layout/Layout.jsx";
import PreLoader from "@components/PreLoader.jsx";
import ProfileBar from "@components/ProfileBar.jsx";
import Header from "@components/Header";

function Game() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  // Initialzing stockfish game engine and Chess.js
  const engine = useMemo(() => new Engine(), []);
  const gameObj = useMemo(() => new Chess(), []);

  useEffect(() => {
    // Actions to update game and engine states in redux store
    dispatch(setGameObj(gameObj));
    dispatch(setEngineObj(engine));
    dispatch(setGamePosition(gameObj.fen()));

    dispatch(setUserWon(false));

    // Preloader
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (

    <div className="flex flex-col h-screen">

      {/* Preloader */}
      {loader && <PreLoader />}
      <Header />
      {/* Two Column layout */}
      <div className="h-full">
        <Layout >
          {/* Left Layout */}
          <Layout.LeftPane>
            {/* Profile bar to show user details */}
            <ProfileBar>
              <Avatar
                name="Robo"
                image={<SiProbot className="w-full h-full" />}
              />
            </ProfileBar>

            {/* Chessboard Component */}
            <ChessBoard />

            {/* Profile bar to show user details */}
            <ProfileBar>
              <Avatar name="Guest" image="" />
            </ProfileBar>
          </Layout.LeftPane>

          {/* Right Layout */}
          <Layout.RightPane>
            {/* Actions Panel */}
            <ActionsPanel />
          </Layout.RightPane>
        </Layout>
      </div>


      {/* Toast Snacbars */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable={false}
        theme="colored"
      />
    </div>
  );
}

export default Game;
