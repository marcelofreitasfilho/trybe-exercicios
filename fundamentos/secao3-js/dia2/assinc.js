//let myName = "Marcelo";
///let birthCity = "Atibaia";
//let birthYear = 2001;
//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//let base = 5;
//let height = 8;
//let area = base*height
//let perimeter = 10+16;
//console.log(base);
//console.log(height);
//console.log(area);
//console.log(perimeter);

//let nota = 50;
//if(nota >= 100){
//    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!")
//}
//else if(nota < 80 && nota >= 60){
//    console.log("Você está na nossa lista de espera.")
//}
//else{
//    console.log("Infelizmente, você reprovou.")
//}

//let currentHour = 15;
//let message;
//if(currentHour >= 22){
//    console.log(message = "Não deveríamos comer nada, é hora de dormir")
//}
//else if(currentHour >=18 && currentHour < 22){
//    console.log(message = "Rango da noite, vamos jantar :D")
//}
//else if(currentHour >= 14 && currentHour < 18){
//    console.log(message = "Vamos fazer um bolo pro café da tarde?")
//}
//else if(currentHour >= 11 && currentHour < 14){
//    console.log(message = "Hora do almoço!!")
//}
//else{
//    console.log("Hmm, cheiro de café recém-passado")
//}

//let weekDay ="quarta-feira";
//if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feia"){
//    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
//}
//else{
//    console.log("FINALMENTE, descanso merecideo! UwU!")
//}

let status = "reprovada"

switch(status){
    case "aprovada":
        console.log("Parabéns, você está no grupo de pessoas aprovadas!")
        break;
    case "lista":
        console.log("Você está na nossa lista de espera")
        break;
    case "reprovada":
        console.log("Infelizmente você reprovou")
        break;
    default:
        console.log("Informação incorreta")  
}
