import type { Dispatch, SetStateAction } from "react";
import PlayerCard from "./Players/PlayerCard";
import Players from "./Players/Players";
import type { IplayerType } from "./PlayersType";

interface PlayerProps {
    playerData: IplayerType,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>,
    
}
const AvailablePlayers = ({ playerData, total, setTotal, selectedPlayers, setSelectedPlayers }: PlayerProps) => {
    console.log(playerData)
    return (
        <div>
            <div className="grid grid-cols-3 gap-7">
                {playerData.map((player => {
                    return <PlayerCard key={player.playerName} total={total} setTotal={setTotal} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></PlayerCard>
                }))}
            </div>
        </div>
    );
};

export default AvailablePlayers;