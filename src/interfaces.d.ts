export interface KMapInterface {
    matrix: number[][];
    setMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
}

export interface MapTileInterface extends KMapInterface {
    value: number;
    coord: {x: number, y: number}
}

export class MapVariables {
	identifier: string
	area: number[][]

	constructor({identifier, area}: {identifier: string, area: number[][]}){
		this.identifier = identifier;
		this.area = area;
	}
}