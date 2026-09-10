import { use } from "react";
import type { IplayerType } from "../PlayersType";


interface PlayerProps {
    PlayerDataPromise: Promise<IplayerType[]>
}

const Players = ({ PlayerDataPromise }: PlayerProps) => {
    const playerData = use(PlayerDataPromise);
    console.log(playerData)

    return (
        <div>
            Players:{playerData.length}

        </div>
    );
};

export default Players;