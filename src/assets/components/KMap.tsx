import { KMapInterface } from "../../interfaces";
import MapTile from "./MapTile";

function KMap({matrix, setMatrix} : KMapInterface){


    return (
        <div>
            {matrix.map((row, rowIndex) => {
            return (
                <div className="flex flex-row" key={`row ${rowIndex}`}>
                    {row.map((col, colIndex) => {
                        return <MapTile key={`col ${colIndex}`} value={col} setMatrix={setMatrix} matrix={matrix} coord={{x: rowIndex, y:colIndex}}/>
                    })}
                </div>
            );
            })}
        </div>
    );
}

export default KMap;
