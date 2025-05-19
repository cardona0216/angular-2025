//en esta clase vamos a hablar de los genericos
/**
 * 
 * Un dato genérico es un tipo flexible que se define mediante un parámetro (<T>) y se adapta dinámicamente al
 *  tipo de dato que se le pase. Esto permite crear funciones, 
 * clases e interfaces reutilizables, haciendo que el código sea más eficiente y escalable.
 */

// en este ejemplo veremos como podemos darle tipo dependiendo de lo que necesitemos
//por ejemplo si recibe un numero lo sumamos o un sring lo concatenamos, si recibe un objeto lo podemos imprimir en consola

// es decir tener unafuncion que sea capaz de procesar la informacion dependiendo del argumento
//nota en lo mas posible hay que tratar de evitar el dato any
export function cualEsMiTipo<T>(argumento: T){
    return argumento
}

const soyString = cualEsMiTipo<string>('hola')
const soyNumnero = cualEsMiTipo<number>(38 )
const soyArreglo  = cualEsMiTipo<number[]>([1,2,3,4,5,6])


console.log(soyString.split(' '));
console.log('tengo',soyNumnero.toFixed(5), 'años');
console.log(soyArreglo.join('-'));





