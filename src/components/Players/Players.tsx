import { use } from "react";
import type { IplayerType } from "../PlayersType";
import AvailablePlayers from "../AvailablePlayers";


interface PlayerProps {
    PlayerDataPromise: Promise<IplayerType[]>
}

const Players = ({ PlayerDataPromise }: PlayerProps) => {
    const playerData = use(PlayerDataPromise);
    // console.log(playerData)

    return (
        <div>
            <h2>Available Players</h2>
            <div>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-success">Success</button>
            </div>
            <AvailablePlayers playerData={playerData}></AvailablePlayers>


        </div>
    );
};

export default Players;