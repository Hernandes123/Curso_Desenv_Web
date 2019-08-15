const valores = [10, 5, 9.3, 8]

console.log(valores[5])

valores[100] = 90

console.log(valores[100])
console.log(valores.length)
//Envio para ultima posição
valores.push('teste')
console.log(valores.length)
console.log(valores[101])
//Recupera/exclui da ultima posição
console.log(valores.pop())

console.log(typeof valores)
console.log(valores[101])
//Recupera o ultimo valor sem excluir
console.log(valores[valores.length -1])

