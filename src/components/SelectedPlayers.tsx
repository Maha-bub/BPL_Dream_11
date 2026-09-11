import type { Dispatch, SetStateAction } from "react";
import type { IplayerType } from "./PlayersType";
import { TbTrash } from "react-icons/tb";

interface SelectedProps {
    selectedPlayers: IplayerType[];
    setSelectedPlayers: Dispatch<SetStateAction<IplayerType[]>>;
}

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
}: SelectedProps) => {

    const handleRemovePlayer = (playerName: string) => {
        setSelectedPlayers(
            selectedPlayers.filter(
                player => player.playerName !== playerName
            )
        );
    };

    return (
        <div className="space-y-3">

            {selectedPlayers.map((player) => (
                <div
                    key={player.playerName}
                    className="border border-base-300 rounded-2xl p-3 flex items-center justify-between bg-base-100 shadow-sm hover:shadow-md transition-all duration-300"
                >

                    {/* Player Info */}
                    <div className="flex gap-3 items-center">

                        <img
                            src={player.playerImg}
                            alt={player.playerName}
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                            <h2 className="font-semibold">
                                {player.playerName}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {player.playerType}
                            </p>
                        </div>

                    </div>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleRemovePlayer(player.playerName)}
                        className="btn btn-ghost btn-sm text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                        <TbTrash size={20} />
                    </button>

                </div>
            ))}

        </div>
    );
};

export default SelectedPlayers;