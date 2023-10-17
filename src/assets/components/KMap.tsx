import MapTile from "./MapTile";

interface KMapInterface {
    matrix: number[][];
}

function KMap({matrix} : KMapInterface){


    return (
        <div>
            {matrix.map((row) => {
            return (
                <div className="flex flex-row">
                    {row.map((e) => {
                        return <MapTile value={e} />
                    })}
                </div>
            );
            })}
        </div>
    );
}

export default KMap;
