

export interface Producto {
    description: string,
    price: number
}

const phone: Producto = {
    description: "Nokia A1",
    price: 150.0
}



const table: Producto = {
    description: "iPad Air",
    price: 250.0
}



 export interface TaxCalculationOptions {
    tax:number,
    productos:Producto[]
}


// function taxCalculation(options: TaxCalculationOptions):[number, number]  {
// function taxCalculation({tax, productos}: TaxCalculationOptions):[number, number]  {
export function taxCalculation(options: TaxCalculationOptions):[number, number]  {

    const {tax, productos} = options
    let total = 0;

    productos.forEach( ({ price }) => {
        total += price
    })

    return [ total , total * tax]
}




const shoopingCart = [phone, table];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    productos: shoopingCart,
    tax: tax
})

console.log( 'Total',total);
console.log( 'tax',taxTotal);



interface Persona {
    nombre: string;
    edad: number;
    ciudad?: string;
  }
  
  function mostrarInfo(persona: Persona) {
    const {nombre, edad} = persona
   return console.log(`Nombre: ${nombre}, Edad: ${edad}, `);
  }
  
  const persona: Persona = { nombre: "Juan", edad: 30, ciudad: 'medellin' };
  

  mostrarInfo(persona); 


  
  


export{}