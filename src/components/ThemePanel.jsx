import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "@reducers/ChessReducer";
function ThemePanel() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.chess);
  return (
    <>
      <label className="inline-flex items-center mt-1 cursor-pointer">
        <input type="checkbox" onChange={() => {
          dispatch(setDarkMode(!darkMode))
        }} className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-600"></div>
        <span className="ms-3 text-sm font-medium text-white">{!darkMode ? "Light Mode" : "Dark Mode"}</span>
      </label>
    </>
  );
}

export default ThemePanel;
