// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golden: 2,
//     silver: 3
//   }
// };

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes, em ' + player['bestInTheWorld']);

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro, e ' + player.medals.silver + ' medalhas de prata' )


// /////////////////////////////////////////////////////////////////////////


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (let nome in names) {
//    console.log('Olá, ' + names[nome])   
//     };

//     let car = {
//         model: 'A3 Sedan',
//         manufacturer: 'Audi',
//         year: 2020
//       };
// for (let carro in car) {
//    console.log(carro + ': ' + car[carro])
//     };

// ////////////////////////////////////////////////////////////////////////

// let customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };
//   console.log(customer1);
//   customer1.lastName = 'Faria';
//   console.log(customer1);
  
//   let customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
//   };
//   console.log(customer2);
//   customer2['lastName'] = 'Silva';
//   console.log(customer2);

  /////////////////////////////////////////////////////////////////////////////////
//   let student = {}
//   function addProperty(student, newKey, value){
//     student[newKey] = value;
//   };

//     addProperty(student, 'nome', 'Marcelo de Freitas');
//     addProperty(student, 'email', 'marcelodefreitasfilho03@gmail.com');
//     addProperty(student, 'telefone', '11947815742');
//     console.log(student);

////////////////////////////////////////////////////////////////////////////////////
let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };

  function studentSkills (student){
    let skills = Object.keys(student);
    for (let index in skills) {
        console.log(skills[index] + ', nível: ' + student[skills[index]]);     
        }
    }
    console.log('Estudante 1');
studentSkills(student1);