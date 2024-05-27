import React from "react";
import chessBoardImg from "@assets/standardboard.png";
import { useNavigate } from "react-router-dom";
import Layout from "@layout/Layout.jsx";
import Header from "@components/Header.jsx";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">

      {/* Header */}
      <Header />

      <div className="h-full">
        {/* Main View Layout */}
        <Layout>
          {/* Chess board image */}
          <Layout.LeftPane>
            <img src={chessBoardImg} className="object-contain" />
          </Layout.LeftPane>

          {/* Play button n theme selection */}
          <Layout.RightPane >
            <div className=" w-full text-4xl 2xl:text-4xl font-black sm:relative">
              Play Chess Online on the #1 Site!
            </div>
            <button
              onClick={() => {
                navigate("/game");
              }}
              className="w-full mt-10 text-2xl bg-lime-600 border-lime-600 border-4 dark:bg-lime-600 drop-shadow-[0_5px_0px_rgba(119,149,86)] py-2 rounded-lg  transition-all"
            >
              Play Computer
            </button>
          </Layout.RightPane>
        </Layout>
      </div>

    </div>
  );
}

export default Dashboard;
