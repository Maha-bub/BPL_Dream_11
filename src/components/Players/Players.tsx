import type { IplayerType } from "../PlayersType";

const Players = ({ PlayerDataPromise }: Promise<IplayerType>) => {
    console.log(PlayerDataPromise)
    return (
        <div>
            Players:{PlayerDataPromise.length}
        </div>
    );
};

export default Players;