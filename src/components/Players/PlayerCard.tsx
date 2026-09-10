import { FaUserPlus } from "react-icons/fa";
import type { IplayerType } from "../PlayersType";
import { IoFlagSharp } from "react-icons/io5";
export interface PlayerCardProps {
    player: Promise<IplayerType>
}

const PlayerCard = ({ player }: PlayerCardProps) => {
    console.log(player);

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title"><FaUserPlus />
                    {player.playerName}
                </h2>
                <div className="flex justify-between w-full">
                    <div className="flex gap-1 items-center">
                        <IoFlagSharp />                        {player.origin}
                    </div>

                    <p>
                        Type: {player.playerType}
                    </p>
                </div>
                <div className="divider"></div>


                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;