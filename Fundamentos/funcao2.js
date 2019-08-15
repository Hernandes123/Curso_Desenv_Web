let a ='texto'
a = function(c,d){
    return c+d;
}

console.log(a(5,2))

//Podemos criar funções com nome sem nome e com chaves e sem chaves
const soma = (n1,n2) =>  n1+n2
console.log(soma(10,2))

const soma2 = (n1,n2) =>  {return n1+n2}
console.log(soma2(10,2))

//Operador ternário
const resultado = nota=> nota>= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(6))



//.

const imprimir = teste => console.log(typeof teste)
imprimir('aula Hoje')
imprimir(objeto={marca:'samsumg'})


