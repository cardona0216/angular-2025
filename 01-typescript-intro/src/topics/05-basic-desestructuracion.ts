// en esl capitulo veremos lo que es la desestructuracion de objetos 


// esto es muy usado para acceder a la propiedades de un objeto de manera mas directa


interface AudioPlayer{
    audioVolumen: number
    songDuration: number
    song: string
    datail: Detalles
}


interface Detalles {
    autor: string
    year: number
}


//con estas dos interfaces vamos a moldear un objeto como ejemplo para ver la desestructuracion

const audioplayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    datail: {
        autor: "ed sherean",
        year: 2015
    }
}


// aqui hacemos la desestrcuturacion esto se puede hacer en varios lugares

// entonces con la desestructuracion lo que buscamos es acceder a ciertas propiedades de manera mas directa

const { audioVolumen, datail} = audioplayer

const { autor } = datail

// Desestructuración básica
// Dado el siguiente objeto, extrae las propiedades nombre y edad usando desestructuración.

interface Persona{
    nombre: string,
    edad: number,
    ciudad: string
}
const persona: Persona = {
     nombre: "Juan", 
     edad: 25, 
     ciudad: "Bogotá" };

const {nombre, edad} = persona

console.error(nombre, edad);


// 2️⃣ Desestructuración con alias
// Extrae la propiedad modelo de este objeto y renómbrala como tipoCarro.

interface Carro{
    marca: string,
    modelo: string,
    año:number
}



const carro: Carro = { marca: "Toyota", modelo: "Corolla", año: 2022 };

const {modelo:tipoCarro} = carro


console.log(tipoCarro);

// TODO: Extrae "modelo" y renómbralo como "tipoCarro"







// console.log('Song: ',audioplayer.song); // sin desestruccion 
// console.log('songDuration: ',audioplayer.songDuration); // sin desestruccion 
// console.log('Autor: ',autor); // con desestruccion 

// console.log('audioVolumen: ',audioVolumen); // con desestruccion  accedemos de manera directa a la propieda





/// vermeos lo que es la desestructuracion de arreglos

// es basicamoente lo mismo que desestructurar objetos, lo hacemos para acceder de manera mas directa  a las propiedades

const [, , trunks = 'No found']: string[] = ['goku', 'vegeta']

console.error('personaje: ', trunks);





// 3️⃣ Desestructuración en funciones
// Completa la función para extraer titulo y autor de un objeto libro.


function mostrarLibro(libro: { titulo: string; autor: string }) {

    const {titulo, autor} = libro
    // TODO: Extrae "titulo" y "autor" dentro de los parámetros
    console.log(`"${titulo}" escrito por ${autor}`);
  }
  
  const miLibro = { titulo: "1984", autor: "George Orwell" };
  mostrarLibro(miLibro);


//   4️⃣ Desestructuración básica
// Dado el siguiente arreglo, extrae el primer y segundo elemento.


const numeros = [10, 20, 30, 40, 50];

// TODO: Extrae los dos primeros elementos

const [p1, p2] = numeros

console.log(p1, p2);


// 5️⃣ Omitir elementos
// Extrae solo el primer y tercer elemento del siguiente arreglo.


const frutas = ["Manzana", "Pera", "Banana", "Uva"];

const [f1,,f2] = frutas
console.log(f1, f2);


// TODO: Extrae "Manzana" y "Banana" ignorando "Pera"


// 6️⃣ Desestructuración con rest (...)
// Extrae el primer número en una variable y almacena el resto en otro arreglo.


const valores = [5, 10, 15, 20, 25];

const [n1, ...rest] = valores

const [n2] = rest
console.log(n2);


console.log(n1, rest);


// TODO: Extrae el primer valor y el resto en otro arreglo


// 7️⃣ Desestructuración de un arreglo de objetos
// Dado el siguiente arreglo de objetos, extrae el nombre del primer estudiante.

const estudiantes = [
    { nombre: "Carlos", edad: 21 },
    { nombre: "María", edad: 23 },
    { nombre: "Luis", edad: 22 }
  ];
  
  // TODO: Extrae el nombre del primer estudiante
  

  const [a,,estudiante] = estudiantes

  const {nombre:studiante, edad:year} = a

  console.log(studiante, year);
  
//   8️⃣ Desestructuración con valores por defecto
//   Dado el siguiente objeto, extrae nombre y edad, pero si edad no está definida, usa 30 como valor por defecto.

const usuario = { nombre: "Ana" };

// TODO: Extrae "nombre" y usa 30 como valor por defecto para "edad"


// 9️⃣ Extraer datos de una API ficticia
// Supón que tienes esta respuesta de una API, usa desestructuración para extraer nombre, email y la ciudad.


//hacemos una intrfaz para darle un tipado  alos datos

interface Respuesta {
    usuario: Usuario
   

}

interface Usuario{
    nombre:string,
    email:string
    direccion: Direccion
}

interface Direccion{
    ciudad:string,
    pais: string
}


const respuesta: Respuesta = {
    usuario: {
        nombre: "Pedro",
        email: "pedro@example.com",
        direccion: {
            ciudad: "Medellín",
            pais: "Colombia"
        }
    },
   
};

  const {usuario:user} = respuesta

  const {direccion, nombre: name, email} = user

  const {ciudad} = direccion 

  console.log(ciudad, nombre, name, email);
  
  // TODO: Extrae "nombre", "email" y "ciudad" de "direccion"

  interface Datos{
    usuario: Usuario2,

  }

  interface Usuario2{
    nombre: string,
    edad:number,
    direccion: Adrress
  }

  interface Adrress{
    ciudad:string,
    pais:string
  }


  const datos: Datos  = {
    usuario: {
        nombre: "Laura",
        edad: 28,

        direccion: {
            ciudad: "Lima",
            pais: "Perú"
        },
    }
};

// TODO: Extrae "nombre" y "ciudad"

const {usuario:user2} = datos

const {direccion: adress, nombre:name2} = user2


const {ciudad:country} = adress

console.log(`este es la ciudad de ${country} donde vive ${name2}`);
  
  
export {

}