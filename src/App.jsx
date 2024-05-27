import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "@views/Main.jsx";
import Game from "@views/Game.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
