let idade = prompt('Digite a dua idade: ')
let temTitulo = prompt('Tem titulo de eleitor? (sim/não): ')
let idadeMinima = 18

if (idade >= idadeMinima && temTitulo == 'sim'){
    alert('Você pode votar!')
}
else if (idade >= idadeMinima && temTitulo == 'nao'){
    alert('Você precisa de título para votar')
}
else {
    alert('Você não tem a idade miníma para votar!')
} 
