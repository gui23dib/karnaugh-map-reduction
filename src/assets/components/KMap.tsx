import { KMapInterface } from "../../interfaces";
import MapTile from "./MapTile";
function KMap({matrix, setMatrix} : KMapInterface){

    function handleClick(coord: {x: number, y:number})  {
        const tempMatrix = matrix;
        tempMatrix[coord.x][coord.y] = tempMatrix[coord.x][coord.y] == 0 ? 1 : 0;
        setMatrix(tempMatrix)
    }

    return (
        <div>
            {matrix.map((row, rowIndex) => {
            return (
                <div className="flex flex-row" key={`row ${rowIndex}`}>
                    {row.map((col, colIndex) => {
                        return <MapTile key={`col ${colIndex}`} coord={{ x: rowIndex, y: colIndex }} handleClick={handleClick} value={col} />
                    })}
                </div>
            );
            })}
        </div>
    );
}

export default KMap;
