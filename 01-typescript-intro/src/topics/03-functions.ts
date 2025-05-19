// funciones


//esta es la difinicion de una funcion tradicional
function addNumbers(a: number, b: number): number {
    
    return a + b
}

//funciones de flecha (a: number, b: number): string => esto se conoce como la firma de la funcion

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`
}


function multiply(firstNumber: number, secondNumber?: number, base: number = 3) {

    return firstNumber * base
    
}





// const result: number = addNumbers(8,2)
// const result2: string = addNumberArrow(8,2)
// const multiplyresult = multiply(8)

// console.log({result, result2, multiplyresult});

//seecion 3 punto 18

//funciones con objetos como argumentos
// en los ( aqui van los argumentos que quiero recibir )

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount
}


const strider : Character = {
    name: 'walter',
    hp: 50,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
        
    }

}

healCharacter(strider, 10)
healCharacter(strider, 30)


strider.showHp()








export {}