import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "./PlayersType";

interface seltectedProps {
    selectedPlayers: IplayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<IplayerType[]>>
}
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: seltectedProps) => {
    console.log(SelectedPlayers)
    return (
        <div>
console.log(selectedPlayers)
        </div>
    );
};

export default SelectedPlayers;