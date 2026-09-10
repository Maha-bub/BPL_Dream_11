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
        <div className="bg-base-200 min-h-screen py-8">
            <div className="container mx-auto max-w-7xl px-4 space-y-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">


                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Available Players
                    </h2>



                    {/* Buttons */}
                    <div className="flex items-center">
                        <button className="btn btn-success rounded-r-none btn-sm sm:btn-md">
                            Available
                        </button>

                        <button className="btn rounded-l-none btn-sm sm:btn-md">
                            Selected
                        </button>
                    </div>
                </div>

                {/* Players */}
                <AvailablePlayers playerData={playerData} />

            </div>
        </div>
    );
};

export default Players;