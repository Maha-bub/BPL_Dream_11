import { use } from "react";
import type { IplayerType } from "../PlayersType";
import AvailablePlayers from "./AvailablePlayers";

const Players = ({ PlayerDataPromise }: Promise<IplayerType[]>) => {
    const playerData = use(PlayerDataPromise);
    console.log(playerData)

    return (
        <div>
            Players:{playerData.length}
            {
                PlayerDataPromise.map((player: IplayerType, idx: number) => {
                    return <AvailablePlayers key={idx} player={player}></AvailablePlayers>
                })
            }
        </div>
    );
};

export default Players;