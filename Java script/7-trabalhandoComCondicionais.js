console.log("Trabalhando com condicionais")

const listaDeDestinos = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
]

const idadeComprador = 15
const estaAcompanhada = true
const temPassagemComprada =true

console.log("Destinos possiveis:")
console.log(listaDeDestinos)

if (idadeComprador >= 18  || estaAcompanhada) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1)
} else {
    console.log("Não é maior de idade, não posso vender!")
}

console.log("Embarque: \n \n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!")
} else {
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos)
