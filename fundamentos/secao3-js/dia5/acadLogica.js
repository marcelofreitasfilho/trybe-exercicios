// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

let objeto = {
    area: 0,
    perimetro: 0,
  };
  
  function calcPerBase(base, altura) {
    return {
        area: base * altura,
        perimeto: (2 * base) + (2 * altura)
    }
  } calcPerBase(5, 2);
  // Exercício 2 - Crie uma função que, dado um array de números inteiros,
  // retorne a quantidade de números pares e ímpares no formato:
  
  let numeros = {
    pares: 0,
    ímpares: 0,
  };
  function quantParImpar (arrayDeInteiros) {
    for (let numbers of arrayDeInteiros) {
        if (numbers % 2 === 0) {
            numeros.pares += 1;
        } else {
            numeros.ímpares += 1;
        }
    }
    return numeros
}
  quantParImpar([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
  // Considere que a string ending sempre será menor que a string word.
  // Dica: Use o split.
  
  // valor de teste: ‘trybe’ e ‘be’
  // valor esperado no retorno da função: true
  // verificaFimPalavra(‘trybe’, ‘be’);
  // Retorno esperado: true
  // verificaFimPalavra(‘joaofernando’, ‘fernan’);
  // Retorno esperado: false;
  function verificaFimPalavra (word, ending) {
    let palavra = word.split('').reverse();

  }

  let ss = 'trybe';
  console.log(ss.split('').reverse())