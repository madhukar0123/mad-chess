import Difficulty from "@components/Difficulty.jsx";
import Moves from "@components/Moves.jsx";
import Actions from "@components/Actions.jsx";

function ActionsPanel() {
  return (
    <>
      <div className="flex w-full h-full flex-col xl:mt-14 xl:mb-14 lg:mt-14 lg:mb-14">

        {/* Difficulty component to change the level of difficulty */}
        <Difficulty />
        {/* History component to show the sequence of moves */}
        <Moves />

        {/* Actons panel */}
        <Actions />
      </div>
    </>
  );
}

export default ActionsPanel;
