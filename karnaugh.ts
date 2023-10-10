class varivel {
	letra: CharacterData
	area: number[][]

	constructor(letra, area){
		this.letra = letra
		this.area = area
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
		teste.mapa
	}

	getMapReduction(){
		//REDUCAO
	}
}
function findSubmatrixPositions(matrix: number[][], submatrix: number[][]): [number, number][] {
	const submatrixHeight = submatrix.length;
	const submatrixWidth = submatrix[0].length;
	const positions: [number, number][] = [];
  
	for (let i = 0; i <= matrix.length - submatrixHeight; i++) {
	  for (let j = 0; j <= matrix[0].length - submatrixWidth; j++) {
		let isMatch = true;
  
		// Verifica se a submatriz corresponde à matriz na posição atual
		for (let m = 0; m < submatrixHeight; m++) {
		  for (let n = 0; n < submatrixWidth; n++) {
			if (matrix[i + m][j + n] !== submatrix[m][n]) {
			  isMatch = false;
			  break;
			}
		  }
		  if (!isMatch) {
			break;
		  }
		}
  
		if (isMatch) {
		  positions.push([i, j]);
		}
	  }
	}
  
	return positions;
  }

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
  
  const submatricesToFind: number[][][] = [
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
  
  for (const submatrixToFind of submatricesToFind) {
	const result = findSubmatrixPositions(teste.mapa, submatrixToFind);
	console.log(`Submatriz:`);
	for (const row of submatrixToFind) {
	  console.log(row);
	}
	console.log(`Posições:`);
	result.forEach((e) => console.log(e))
	console.log('---');
  }