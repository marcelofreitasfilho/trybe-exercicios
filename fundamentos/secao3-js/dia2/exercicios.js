//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// for (let index = 0; index < numbers.length; index += 1){
//     console.log(numbers[index]);
// }

//Some todos os valores contidos no array e imprima o resultado.
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// }

// console.log(result);

//Calcule e imprima a média aritmética dos valores contidos no array.
// let soma = 0;
// for (let index = 0; index < numbers.length; index +=1){
//     soma += numbers[index];
// }
// let media = soma/numbers.length;
// console.log(media)
// //Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
// if(media > 20){
//     console.log("Valor maior que 20")
// } else {
//     console.log("Valor menor ou igual a 20")
// }

//Utilizando for, descubra o maior valor contido no array e imprima-o.
// let maiorNumero = numbers[0]
// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorNumero){
//         maiorNumero = numbers[index]
//     }
// }
// console.log(maiorNumero)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let numeroImpar = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0){
//         numeroImpar +=1;
//     }
    
// }
// if (numeroImpar === 0){
//     console.log('nenhum valor ímpar encontrado')
// } else {
//     console.log(numeroImpar)
// }

//Utilizando for, descubra o menor valor contido no array e imprima-o.
// let menorValor = numbers[0]
// for (let index = 1; index < numbers.length; index+= 1){
//     if (numbers[index] < menorValor){
//         menorValor = numbers[index]
//     }
// }
// console.log(menorValor)

//Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// let numeros = []
// for (let index = 1; index <= 25; index+=1) {
//     numeros.push(index);
// }

// //Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
// for (let index = 0; index < numeros.length; index+=1) {
//     console.log(numeros[index] / 2)
// }

//crie um algoritmo que imprima na tela o fatorial de 10
// let fat = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fat *= index;
// } console.log(fat);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
// let word = 'tryber';
// let cont = '';

// for (let index = 0; index < word.length; index +=1 ) {
//     cont += word[word.length - 1 - index]
// } console.log(cont);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorp = array[0];
for (let index = 0; index < array.length; index += 1) {
    if(array[index] < menorp){
    menorp = array[index];
} 
}console.log("A menor palavra é " + menorp);

let maiorp = array[0];
for (let index = 0; index < array.length; index += 1) {
    if(array[index] > maiorp){
        maiorp = array[index]
    }
}console.log("A maior palavra é " + maiorp)