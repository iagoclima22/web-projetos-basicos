let valorConta = parseFloat(prompt('Digite o valor da conta: '))
let porcentagemGorjeta = parseFloat(prompt('Quanto de gorjeta(porcentagem)?'))
let valorGorjeta = (porcentagemGorjeta/100) * valorConta
let valorTotal = valorConta + valorGorjeta

alert('O valor total com gorjeta é de R$' + valorTotal.toFixed(2))
