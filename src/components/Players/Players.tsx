import { use } from "react";
import type { IplayerType } from "../PlayersType";

const Players = ({ PlayerDataPromise }: Promise<IplayerType[]>) => {
    const playerData = use(PlayerDataPromise);
    console.log(playerData)

    return (
        <div>
            Players:{playerData.length}
        </div>
    );
};

export default Players;