import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "./PlayersType";

interface seltectedProps {
    selectedPlayers: IplayerType[],
    setSelectedPlayers: Dispatch<SetStateAction<IplayerType[]>>
}
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }: seltectedProps) => {
    return (
        <div>
            Selected Players!
        </div>
    );
};

export default SelectedPlayers;