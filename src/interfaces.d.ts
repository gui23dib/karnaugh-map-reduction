export interface KMapInterface {
	matrixSize: number;
    matrix: number[][];
    setMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface MapTileInterface {
	matrix: number[][];
    handleClick: (coord: {x: number, y:number}) => void;
	coord: {x: number, y:number};
}