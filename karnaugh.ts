class variavel {
	letra: string
	area: number[][]

	constructor(letra, area){
		this.letra = letra
		this.area = area
	}
}

class pattern {
	tamanho: number
	cord: number[][]

	constructor(tamanho, cord){
		this.tamanho = tamanho
		this.cord = cord
	}
}

class KMap {
	tamanho: number = 0
	mapa: number[][] = [
		[0, 1, 1, 1],
		[0, 1, 1, 0],
		[1, 1, 1 ,0],
		[1, 1, 1, 0],
	]
	variaveis: variavel[] = []
	submatricesToFind: number[][][] = [
		[
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		],
		[
			[1, 1],
			[1, 1],
			[1, 1],
			[1, 1],
		],
		[
			[1, 1],
			[1, 1],
		],
		[
			[1, 1],
		],
		[
			[1],
			[1]
		],
		];


	setVariaveisByTamanho(tamanho: number){
		const isEven = (n: number) => n % 2 == 0  
		const getNextEven = (n: number) => {
			let fQuotient
			if(n % 2 == 0) fQuotient= n / 2
			else fQuotient = (n + 1) / 2
			return fQuotient + 1
		}

		const makeArray = (n) => {
			var arr = new Array(n), i, l;
			for(i = 0, l = n; i < l; i++) arr[i] = new Array(n);
			return arr;
		}

		this.tamanho = tamanho

		for(let i = 1 ; i <= tamanho ; i++){

			let tempValuesTable: number[][] = makeArray(tamanho)
			let proximoPar: number = getNextEven(i)
			let varDivisionQuotient: number = tamanho / proximoPar
			
			let modQ: number = (proximoPar/ 2) - 1

			const varDivisionValue = (n) => n >= modQ && n < varDivisionQuotient + modQ + (modQ > 0 ? modQ : 0)  ? 1 : 0

			for(let y = 0 ; y < tamanho ; y++){
				for(let x = 0 ; x < tamanho ; x++){
					if(isEven(i)){ // eh par
						tempValuesTable[y][x] = (varDivisionValue(y))
					} else { // eh impar
						tempValuesTable[y][x] = (varDivisionValue(x))
					}
				}
			}
			const tempLetra = String.fromCharCode(64 + i)
			
			this.variaveis.push(new variavel(tempLetra, tempValuesTable))
		}
	}

	getMatchingsInMap(matrix: number[][], submatrices: number[][][]): [number, number][][]{
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
						const overlapping = subPositions.some(coord => existingPositions.some(existingCoord => existingCoord[0] === coord[0] && existingCoord[1] === coord[1]));
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

	processCoordinates(kVar: variavel, coordinates: number[][]): string {
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
				return kVar.letra + "'";
			} else if (hasOne) {
				return kVar.letra;
			}
			return ""
	}
	

	getMapReduction(){
		let res: string[] = []

		const allSubmatrices: number[][][] = teste.getMatchingsInMap(this.mapa, this.submatricesToFind);

		allSubmatrices.forEach(submatrix => {
			let reductedStringResponse = ""
			this.variaveis.forEach(variavel => {
				const temp = this.processCoordinates(variavel, submatrix)
				reductedStringResponse += temp
			})
			if(reductedStringResponse != "") res.push(reductedStringResponse)
		})
		
		return res.join(" + ")
	}
}


//!MAIN

const teste: KMap = new KMap()
teste.setVariaveisByTamanho(4)

teste.variaveis.forEach((vare) => {
	console.log('Variavel:', vare.letra)
	vare.area.forEach((a) => {
		console.log(a) 
	})
})

console.log("MAPA DE KARNAUGH:")
teste.mapa.forEach((m)=> {
	console.log(m) 
})

console.log(teste.getMapReduction())