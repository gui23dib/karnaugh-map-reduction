class varivel {
	letra: CharacterData
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

class CircularList<T> {
	private data: T[];
	private currentIndex: number;

	constructor(data: T[]) {
		this.data = data;
		this.currentIndex = 0;
	}

	getCurrent(): T {
		return this.data[this.currentIndex];
	}

	moveNext(): T {
		this.currentIndex = (this.currentIndex + 1) % this.data.length;
	return this.getCurrent();
	}

	movePrevious(): T {
		this.currentIndex = (this.currentIndex - 1 + this.data.length) % this.data.length;
		return this.getCurrent();
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
	variaveis: varivel[] = []

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
			
			this.variaveis.push(new varivel(tempLetra, tempValuesTable))
		}
	}

	getMatchingsInMap(){
		function findSubmatrixPositions(matrix: number[][], submatrix: number[][]): [number, number][][] {
			const positions: [number, number][][] = [];
		  
			const numRows = matrix.length;
			const numCols = matrix[0].length;
			const subRows = submatrix.length;
			const subCols = submatrix[0].length;
		
			for (let row = 0; row <= numRows - subRows; row++) {
				for (let col = 0; col <= numCols - subCols; col++) {
					let match = true;
					const currentPositions: [number, number][] = [];
		
					for (let i = 0; i < subRows; i++) {
						for (let j = 0; j < subCols; j++) {
							if (matrix[row + i][col + j] !== submatrix[i][j]) {
								match = false;
								break;
							}
							currentPositions.push([row + i, col + j]);
						}
					if (!match) break;
					}
					if (match) {
						positions.push(currentPositions);
					}
				}
			}
			return positions;
		}

		const submatricesToFind: number[][][] = [
			// [
			// 	[1, 1, 1, 1],
			// 	[1, 1, 1, 1],
			// ],
			[
				[1, 1],
				[1, 1],
				[1, 1],
				[1, 1],
			],
			// [
			// 	[1, 1],
			// 	[1, 1],
			// ],
			// [
			// 	[1, 1],
			// ],
			// [
			// 	[1],
			// 	[1]
			// ],
			];

		let res: number[][][][] = [];

		for (const submatrixToFind of submatricesToFind) {
			res.push(findSubmatrixPositions(this.mapa, submatrixToFind))
		}
		//console.log(res)
		res.forEach((e) => {
			console.log(e)
		})
		return res;
	}

	getMapReduction(){

		this.variaveis.forEach(element => {
			
		});
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

console.log("MATCHINGS:")
teste.getMatchingsInMap()