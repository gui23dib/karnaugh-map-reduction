import { MapVariables } from "../../interfaces";
import { submatricesToFind } from "./Submatrices";

export function getMatchingsInMap(matrix: number[][], submatrices: number[][][]): [number, number][][]{
    const nonCollapsingPositions: [number, number][][] = [];

    for (const submatrix of submatrices) {
        const subRows = submatrix.length;
        const subCols = submatrix[0].length;

        for (let row = 0; row <= matrix.length - subRows; row++) {
            for (let col = 0; col <= matrix[0].length - subCols; col++) {
                let match = true;

                for (let i = 0; i < subRows; i++) {
                    for (let j = 0; j < subCols; j++) {
                        if (submatrix[i][j] === 1 && matrix[row + i][col + j] !== 1) {
                            match = false;
                            break;
                        }
                    }
                    if (!match) break;
                }

            if (match) {
                const subPositions: [number, number][] = [];

                for (let i = 0; i < subRows; i++) {
                    for (let j = 0; j < subCols; j++) {
                        subPositions.push([row + i, col + j]);
                    }
                }

                let isCollapsing = false;

                for (const existingPositions of nonCollapsingPositions) {
                    const overlapping = subPositions.every(coord => existingPositions.some(existingCoord => existingCoord[0] === coord[0] && existingCoord[1] === coord[1]));
                    console.log('overlapping', overlapping)
                    if (overlapping) {
                        isCollapsing = true;
                        break;
                    }
                }

                if (!isCollapsing) {
                    nonCollapsingPositions.push(subPositions);
                }
            }
            }
        }
    }
    console.log(nonCollapsingPositions)
    return nonCollapsingPositions;
}

export function processCoordinates(kVar: MapVariables, coordinates: number[][]): string {
    let hasZero = false;
    let hasOne = false;

    for (const coord of coordinates) {
        const [row, col] = coord;
        if (kVar.area[row] && kVar.area[row][col] !== undefined) {
            if (kVar.area[row][col] === 0) {
                hasZero = true;
            } else if (kVar.area[row][col] === 1) {
                hasOne = true;
            }
        }
    }

    if (hasZero && hasOne) {
        return "";
    } else if (hasZero) {
        return kVar.identifier + "'";
    } else if (hasOne) {
        return kVar.identifier;
    }
    return ""
}

export function getMapReduction(variaveis: MapVariables[], KMapObj: number[][]){
    const res: string[] = []
    const allSubmatrices: number[][][] = getMatchingsInMap(KMapObj, submatricesToFind);

    allSubmatrices.forEach(submatrix => {
        let reductedStringResponse = ""
        variaveis.forEach(variavel => {
            const temp = processCoordinates(variavel, submatrix)
            reductedStringResponse += temp
        })
        if(reductedStringResponse != "") res.push(reductedStringResponse)
    })
    const a = res.join(" + ")
    console.log(a)
    return a
}
