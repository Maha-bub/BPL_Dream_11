import { FaUserPlus } from "react-icons/fa";
import type { IplayerType } from "../PlayersType";
import { IoFlagSharp } from "react-icons/io5";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
export interface PlayerCardProps {
    player: IplayerType,
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}

const PlayerCard = ({ player, total, setTotal }: PlayerCardProps) => {
    console.log(total, setTotal)
    // console.log(player);

    const [isSelected, setIsSelected] = useState(false);
    const handlePlayerButtons = () => {
        setIsSelected(true);
        toast.success(`${player.playerName} purchased successfully done!`)
        let totalCoin = total - (player.price)
        { totalCoin >= 0 ? setTotal(totalCoin) : toast.error(` Balance is not enough for purchased!`) }
    }

    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden">

            {/* Player Image */}
            <figure className="h-64 bg-base-200 overflow-hidden">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </figure>

            <div className="card-body p-5">

                {/* Player Name */}
                <div className="flex items-center gap-2">
                    <FaUserPlus className="text-primary" />

                    <h2 className="card-title text-lg font-bold">
                        {player.playerName}
                    </h2>
                </div>

                {/* Country + Player Type */}
                <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                    <div className="flex items-center gap-1">
                        <IoFlagSharp className="text-primary" />
                        <span>{player.origin}</span>
                    </div>

                    <span className="badge badge-outline">                        {player.playerType}                    </span>
                </div>

                <div className="divider my-2"></div>

                {/* Player Information */}
                <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">                            Rating                        </span>

                        <span className="font-semibold">                            ⭐ {player.rating}                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">                            Batting Style                        </span>

                        <span className="font-medium text-right">
                            {player.battingStyle}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Bowling Style
                        </span>

                        <span className="font-medium text-right">
                            {player.bowlingStyle}
                        </span>
                    </div>

                </div>

                <div className="divider my-2"></div>

                {/* Price + Button */}
                <div className="flex justify-between items-center">

                    <div>
                        <p className="text-xs text-gray-500">
                            Player Price
                        </p>

                        <p className="text-xl font-bold text-primary">
                            ${player.price.toLocaleString()}
                        </p>
                    </div>

                    <button
                        onClick={() => handlePlayerButtons()}
                        className={`btn btn-primary px-6                    
                        `}
                        disabled={isSelected}>
                        {/* disabled={isSelected  === true ? true : false}> */}


                        {
                            isSelected ? "Selected" : "Choose Player"
                        }
                    </button>

                </div>

            </div>
        </div>
    );
};

export default PlayerCard;