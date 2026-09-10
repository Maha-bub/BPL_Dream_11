import PlayerCard from "./Players/PlayerCard";
import Players from "./Players/Players";
import type { IplayerType } from "./PlayersType";

interface PlayerProps {
    playerData: IplayerType
}
const AvailablePlayers = ({ playerData }: PlayerProps) => {
    console.log(playerData)
    return (
        <div>
            <div className="grid grid-cols-3 gap-7">
                {playerData.map((player => {
                    return <PlayerCard player={player}></PlayerCard>
                }))}
            </div>
        </div>
    );
};

export default AvailablePlayers;