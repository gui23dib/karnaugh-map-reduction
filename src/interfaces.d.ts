export interface KMapInterface {
    matrix: number[][];
    setMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface MapTileInterface {
    value: number;
    handleClick: (coord: {x: number, y:number}) => void;
	coord: {x: number, y:number};
}