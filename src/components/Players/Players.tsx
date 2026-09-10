import { use, useState, type ActionDispatch, type Dispatch } from "react";
import type { IplayerType } from "../PlayersType";
import AvailablePlayers from "../AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers";


interface PlayerProps {
    PlayerDataPromise: Promise<IplayerType[]>
    total: number,
    setTotal: Dispatch<SetStateAction<number>>
}

const Players = ({ PlayerDataPromise, total, setTotal }: PlayerProps) => {
    const playerData = use(PlayerDataPromise);
    // console.log(playerData)


    const [buttonType, setButtonType] = useState('Available');

    const handleButtonType = (type: 'Available' | 'Selected') => {
        setButtonType(type)
    }

    return (
        <div className="bg-base-200 min-h-screen py-8">
            <div className="container mx-auto max-w-7xl px-4 space-y-8">

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">


                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {buttonType === 'Available' ? "Available Players" : "Seletcted Players"}
                    </h2>



                    {/* Buttons */}
                    <div className="flex items-center">
                        <button
                            onClick={() => handleButtonType("Available")}
                            className={`btn ${buttonType === 'Available' ? "btn-success" : ""} rounded-r-none btn-sm sm:btn-md`}>
                            Available
                        </button>

                        <button
                            onClick={() => handleButtonType("Selected")}
                            className={`btn ${buttonType === 'Selected' ? "btn-success" : ""}  rounded-r-none btn-sm sm:btn-md`}
                        >
                            Selected
                        </button>
                    </div>
                </div>

                {/* Players */}
                {
                    buttonType === 'Available' ? <AvailablePlayers playerData={playerData} /> : <SelectedPlayers></SelectedPlayers>
                }

            </div>
        </div >
    );
};

export default Players;