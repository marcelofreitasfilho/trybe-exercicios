//EXERCICIO 1
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
// //   console.log('Bem-vinda ' + info.personagem)
// info['recorrente'] = 'Sim';
// // console.log(info);
// // for (let key in info) {
// //     console.log(key);
// // }
// // for (let key in info) {
// //     console.log(info[key]);
// // }
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178 Donald',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//    };
//   for (let key in info){
//      if (
//         key === 'recorrente' &&
//         info[key] === 'Sim' &&
//         info2[key] === "Sim"
//      ) {
//         console.log('Ambos recorrentes');
//      } else {
//         console.log(info[key] + ' e ' + info2[key]);
//      }
//   }

//EXERCICIO 2
// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)
// leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       }
// )
// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')

//EXERCICIO 3
// let order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         },
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         },
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       },
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   function customerInfo(order) {
  
// }
  
//   customerInfo(order);
  
//   function orderModifier(order) {
//     // let deliveryPerson = order.order.delivery.deliveryPerson;
//     // let customerName = order.name;
//     // let phone = order.phoneNumber;
//     // let rua = order.address.street;
//     // let numero = order.address.number;
//     // let ap = order.address.apartment;
//     //     console.log('Olá, ' + deliveryPerson + ', entrega para ' + customerName + ',' + 'telefone: ' + phone + ',' + ' ' + rua + ', numero: ' + numero + ', apartamento n: ' + ap)
//     let novoCliente = order.name = 'Luiz SIlva';
//     let novoValor = order.payment.total = 55;
//     let pedidoPizza = Object.keys(order.order.pizza);
//     let bebida = order.order.drinks.coke.type;
//         console.log ('Olá, ' + novoCliente + ', o valor total de seu pedido de ' + pedidoPizza + ' e ' + bebida + ' é de R$' + novoValor)  
// }
  
//   orderModifier(order);

//EXERCICIO 4
let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
/////////////////////////////////////

//   function addNot (objeto, chave, valor) {
//     objeto[chave] = valor;
//   } 
//   addNot(lesson2, 'turno', 'noturno');
//   console.log(lesson2);
  
  ///////////////////////////

//   function listaChave (objeto) {
//     return Object.keys(objeto);
// //   }
//   console.log(listaChave(lesson3));

  //   /////////////////////////////

//   function tamObj (objeto) {
//     return Object.keys(objeto).length;
//   }
//   console.log(tamObj(lesson1));
 
  ///////////////////////////////
  
//   function objVal (objeto) {
//     return Object.values(objeto);
//   }
//   console.log(objVal(lesson2));
  
  /////////////////////////////////
  let allLessons = Object.assign({}, {
    lição1: lesson1,
    liçao2: lesson2, 
    lição3: lesson3
  });
//   console.log(allLessons);
function totalEstud (objeto) {
  let estud = 0;
  let keys = Object.keys(objeto);
  for (let index in keys)  
}