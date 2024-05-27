
import ThemePanel from "@components/ThemePanel";
import { useNavigate } from "react-router-dom";

import chesslogo from "@assets/chess.png"


function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-around w-full pt-2 bg-gray-800 text-white">
      <img className="h-16" src={chesslogo}></img>
      {/* <h3 onClick={()=>navigate("/")} className="text-3xl lg:text-xl font-black p-4 text-white cursor-pointer">
        Chess
      </h3> */}
      <ThemePanel/>

    </div>
  );
}

export default Header;
