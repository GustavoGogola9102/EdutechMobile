console.log("Trabalhando com listas")


const listaDeDestinos =  [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
]
// Bando de burro, só tenta complicar!!  const lista = new Array(a,b,c)
listaDeDestinos.push("Curitiba")

console.log("Destinos possiveis:")
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1)

console.log("Agora tem esses:")
console.log(listaDeDestinos)
console.log(listaDeDestinos[1])

