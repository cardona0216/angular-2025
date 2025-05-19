

//conceptos basicos de ts:

// para definir variables lo que hacemos con ts es decir como luciran nuestras variables

// cuando declaramos las varianles ts la infiere al valor que le estestemos asignado es decir si a la demos a esa variable un numero
// ts dira que es un number y si le damos un string o letras ts infiere que es un string


const name = 'walter' // si sabemos que la variable no cambiara la manejaremos como una constante

let hpPoints: number | string = 95;

const isAlive: boolean = true

hpPoints = 'saaa'


console.log({
    name, hpPoints, isAlive
});



// todas estas validaciones o asignarle un tipo de dato nos ayuda a que nuestro codigo no cambie de una manera extraña





