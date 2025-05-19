


/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string,
    age: number,
    // address: {
    //     calle: string,
    //     pais: string,
    //     ciudad: string
    // },
    //cuando en una interfas halla otro objeto se recomienda asiganrle una interfaz aparte
    address: Address // con esto defiimos una interfaz aparte
    showAddress: () => string
}

interface Address {
    calle: string,
    pais: string,
    ciudad: string
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};