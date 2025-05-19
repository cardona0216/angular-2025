

// en esta clase vamos a trabajar con el concepto de la herencia
export class Person{

    constructor(
        public name: string,
        public lastName:string,
        private address: string = 'No direccion'){

    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         //super es una funcion especial y se tiene que llamar por que le indica que debe de llamar al constructor del padre(extends Person)
//         super(realName, 'Medellin')
//     }
// }
export class Hero {

    //public person: Person;
   
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
      
     // this.person = new Person(realName) // el proble aqui es que tenemos la dependencia directa de la clase
      //entonces si la clase Person cambia esto implicaria que la clase Hero se veria afectada, y no tiene sentido de que 
      // la clase hero se vea afectada porque la clase Person cambio
    }
}

//creamos una nueva intancia de la clase Person

const walter = new Person('walter','cardona','medellin!!')



const ironman = new Hero('walter cardona', 45,'tonyeee', walter)

console.log(ironman);

// que significa la composicion es decir en este caso la clase Hero necesita los datos de Person para tener unos datos que estan ah(name, address)