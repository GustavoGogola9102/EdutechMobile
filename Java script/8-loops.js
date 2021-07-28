console.log("Trabalhando com condicionais")

const listaDeDestinos = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
]

const idadeComprador = 15
const estaAcompanhada = true
let temPassagemComprada = false
const destino = "Salvador"

console.log("Destinos possiveis:")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0
let destinoExiste = false

for(let i = 0  ; i < 3  ; i ++) {
    if (listaDeDestinos[i] == destino){
        destinoExiste = true
        break
    }
}

console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe tivemos um erro!")
}
