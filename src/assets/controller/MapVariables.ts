
export class MapVariables {
	identifier: string
	area: number[][]

	constructor({identifier, area}: {identifier: string, area: number[][]}){
		this.identifier = identifier;
		this.area = area;
	}
}

export function setVariablesBySize(size: number){
    const isEven = (n: number) => n % 2 == 0  
    const getNextEven = (n: number) => {
        if(n % 2 == 0) return (n/2) + 1
        else return ((n + 1) / 2) + 1 
    }

    const makeArray = (n: number) => {
        const arr = new Array(n);
        for(let i = 0, l = n; i < l; i++) arr[i] = new Array(n);
        return arr;
    }

    const res: MapVariables[] = []

    for(let i = 1 ; i <= size ; i++){
        const tempValuesTable: number[][] = makeArray(size)
        const nextEven: number = getNextEven(i)
        const varDivisionQuotient: number = size / nextEven
        
        const modQ: number = (nextEven/ 2) - 1

        const varDivisionValue = (n: number) => n >= modQ && n < varDivisionQuotient + modQ + (modQ > 0 ? modQ : 0)  ? 1 : 0

        for(let y = 0 ; y < size ; y++){
            for(let x = 0 ; x < size ; x++){
                if(isEven(i)){ // eh par
                    tempValuesTable[y][x] = (varDivisionValue(y))
                } else { // eh impar
                    tempValuesTable[y][x] = (varDivisionValue(x))
                }
            }
        }
        const tempId = String.fromCharCode(64 + i)
        res.push(new MapVariables({identifier: tempId, area: tempValuesTable}))
    }
    
    return res
}