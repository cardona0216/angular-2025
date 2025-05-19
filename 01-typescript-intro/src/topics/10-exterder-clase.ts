
// en este clase vamos a aprender el concepto de extender una clase en typescript

// es añadir o expandir su funcionalidad



export class Person{

    constructor(
        public name: string,
        public address: string = 'No direccion'){

    }
}

export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        //super es una funcion especial y se tiene que llamar por que le indica que debe de llamar al constructor del padre(extends Person)
        super(realName)
    }
}

const ironman = new Hero('walter cardona', 45,'tony')

console.log(ironman);