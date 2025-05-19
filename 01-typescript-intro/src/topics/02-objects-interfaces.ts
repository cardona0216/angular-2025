// en este apartado veremos lo que corresponde a los objetos y interfaces en ts


const skills: string[] = ['basd','counter','heading'];


interface Caracter  {
    name: string;
    hp: number;
    skill: string[];
    homeTomw: string

}

const strider: Caracter = {
    name: 'walter',
    hp: 10,
    skill: ['bash'],
    homeTomw: ""
}


console.table(strider);



export{}