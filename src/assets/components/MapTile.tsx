/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { MapTileInterface } from "../../interfaces";

const MapTile = ({handleClick, coord, matrix}: MapTileInterface) => {

    const [tempValue, setTempValue] = useState(matrix[coord.x][coord.y])

    function handleSelfClick() {
        setTempValue(tempValue == 0 ? 1 : 0)
        handleClick(coord)
    }

    useEffect(() => {
      setTempValue(matrix[coord.x][coord.y])
    }, [coord.x, coord.y, matrix])
    

    return (
        <div className="justify-center py-2.5 select-none px-5 mr-2 mb-2 text-sm focus:outline-none bg-slate-700 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer font-bold text-slate-200 hover:text-slate-900 focus:z-10 focus:ring-4 focus:ring-gray-200" onClick={() => handleSelfClick()}>
            <h1 className="w-8 text-center">
                {tempValue}
            </h1>
        </div>
    );
};

export default MapTile;

