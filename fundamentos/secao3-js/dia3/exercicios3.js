// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

//  let saldo = 1000;

//  function adcsaldo(tanto){
//      return tanto + saldo
//  } console.log(adcsaldo(500))
//  function subsaldo(tanto){
//      return saldo - tanto
//  } console.log(subsaldo(500))
//  function multsaldo(tanto){
//      return saldo * tanto
//  } console.log(multsaldo(1.5))
//  function dvisaldo(tanto){
//      return saldo / tanto
//  } console.log (dvisaldo(2))


let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adcCliente(cliente){
    if(typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return 'Cliente ' + cliente + ' adicionado ao sistema';
    } else{
        return 'Parametro incorreto'
    }
} console.log(adcCliente('Marcelo'));
console.log(adcCliente(50));


