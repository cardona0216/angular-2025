

// aqui veremos la explicacion de clases

//se puede entender clase como un molde que podemos usar para hacer galletas es decir creamos un molde de galletas y cuando necesitemos 
//hacer una galleta ya tendriamos el molde para hacer las galletas

//dentro de la clase las variables se conoces como propiedases(property)
//y las funciones dentro de la clase se conocen como metodos

// esta es la forma larga
export class Person{

    //hay varias formas de definir una clase, para poder crear un instacia
    public name: string; 
    private address?: string;

    //este es un metodo especia de nuestra clase y es la funcin de que se llama de primer cuando se crea una instancia de la clase
    constructor(name:string, address:string){
        this.name = name;
        this.address = address

     

    }



}

//esta es la forma corta como la deficnimos en angular
export class Person1{
              // esto se conoce como inyeccion de dependencias
    constructor(public Name: string, private direccion: string = 'no direecion'){
     // esta inyeccion de hace en el constructor

    }


}


const ironman2 = new Person1('samuel') // aqui estoy haciendo una instancia de la clase person



//extender una clase: esto quiere decir que podemos extender o heredar las propiedades y metodos a otra clase

export class Hero extends Person{
    constructor(public alterego: string, public age:number, public realname:string){
        //cuando creamos el constructor de una clase que sea extendida
        super(realname, 'medellin')
    }
}
const ironman = new Hero('Walter',45,'tony') // aqui estoy haciendo una instancia de la clase person

console.log(ironman)
console.log(ironman2)

 