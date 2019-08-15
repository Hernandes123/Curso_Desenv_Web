let texto = true
console.log(texto)

console.log('Elementos VERDADEIROS:')
console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})

console.log('Elementos FALSOS:')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

let teste = null
console.log(teste)

console.log('testando ou')
console.log(!!('' || null || 0 || " "))
