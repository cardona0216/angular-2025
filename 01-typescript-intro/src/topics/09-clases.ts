// profuncizacion de las clases

//esto es un clase
export class Person{

    //las clases tienen atributos -> variables
    // funciones -> metodos

    public name : string;
    private address: string

    //dentro de una clase el constructir es el que se ejecuta primero
    constructor(name:string, address: string){
        //el constructor es un metodo especila en nuestras clases, el constructor es el primer metodo o funcion que se va a llamar
        // cuando creamos una instacia de nuestra clase
        this.name = name
        this.address = address

    }

}

// al instanciar una clase es hacer una nueva galleta a partir de ese molde
//cuando se instancia una clase o se usa el molde para crear una nueva persona, esto 
const ironman = new Person('Ironman', 'Nueva york')
console.log(ironman.name);
console.log(ironman);


//forma corta de definir clases

export class Person1{

    constructor(
        public name1: string,
        private address1: string = 'No direccion'){

    }
}

const ironman1 = new Person1('walter cardona', 'sancarlos')

console.log(ironman1);


