const nameAge = (name,age) => {
    if (!name || !age) {
        throw new Error('Todas as informações são necessárias')
    }
}

const underAge = (name, age) => {
    if (name && age < 18) {
        throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    }
}

const studentRegister = (name, age) => {
    // try {
    //     if (!name || !age) {
    //         throw new Error('Todas as informações são necessárias')
    //     } else if (name && age < 18) {
    //         throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas')
    //     } else if (name && age > 18) {
    //         return `${name}, seja bem vindo(a) à Autrybe`;
    //     }
    // }
    // catch (error) {
    //     throw error.message;
    // } -> O certo seria ter uma função para cada
    try {
        nameAge(name, age);
        underAge(name,age);
        return `${name}, boas vindas á auTrybe`
    }
    catch (error) {
        return error.message
    }
  };