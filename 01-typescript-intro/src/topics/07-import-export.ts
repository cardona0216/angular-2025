
 // en este clase veremos lo de imprtar y exportar

 import { Producto, taxCalculation } from './06-functions-destructuring';




const shopingcart: Producto[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    },
 ]


const [total, tax] = taxCalculation({
    tax: 0.15,
    productos: shopingcart
})


 console.log('Total', total);
 console.log('Tax', tax);
 
