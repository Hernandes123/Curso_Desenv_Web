const produto = {}

produto.nome = 'Celular'
produto.preco = 1000
produto.cor = 'Branco'
console.log(produto.nome, produto.preco, produto.cor)

produto.categoria = {tipo:'smartphone', loja: 'Americanas'}

console.log(produto)

/*const objetoestranho = {
    ['nome Estranho'] :0
}

console.log(objetoestranho["nome","Estranho"])*/

function imprimir_soma(n1, n2){
    console.log(n1+n2)
}

imprimir_soma(2,3,8,10)

function multiplicar(n1,n2){
    return n1+n2

}
console.log(multiplicar(2,3,'texto'))

console.log(multiplicar())