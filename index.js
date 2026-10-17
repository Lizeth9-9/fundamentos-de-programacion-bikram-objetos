const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    matricula: "3214abcd",
};

const casa = {
    codPostal: "01010",
    calle: "Avenida de los Huetos",
    portal: 12,
    piso: "3 a",
};

const FullStackDeveloper = {
    lenguajes: ["css", "node.js", "express.js", "html"],

    proyectos: ["chatbot", "pagina web empresarial"],
};

const perro = {
    nombre: "Toby",
    raza: "Labrador Retriever",
    color: "Dorado",
    edad: 3,
    ladrar: function () {
        console.log("guau guau");
    },
    popo: function () {
        return Math.random() * 3;
    },
};

const portatil = {
    marca: "hp",
    modelo: "HP Victus y OMEN",
};
let marcaPortatil = portatil.marca;

let marcaPortatil2 = portatil["marca"];

const concierto = {
    grupos: ["rock", "bachata", "salsa"],
    fecha: "01/04/2010",
};

let grupos = concierto["grupos"];

const Led = {
    rojo: "rojo",
    verde: "verde",
    azul: "azul",
};

let RGB = [Led[rojo], Led[verde], Led[azul]];

portatil.modelo = "P345";

concierto.cartelera = "Guns N' Roses";

concierto.fecha = new Date();

const Impresora = {
    imprimiendo: "ok",
    tinta: {
        rojo: "rojo",
        verde: "verde",
        azul: "azul",
    },
};

Impresora.imprimiendo = {
    nombreArchivo: "documentos word",
    copias: 2,
    numPaginas: 5,
};

const Noticia = {
    titular: "Descubren un nuevo exoplaneta habitable",
    cuerpo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus architecto eum id! Illum, ducimus quidem error soluta placeat eos voluptates incidunt excepturi, facilis corporis id sunt neque ad quisquam tempore.",
};

const Persona = {
    nombre: "Carlos",
    apellidos: "Echevarria",
    edad: 55,
};

const avion = {
    numPasajeros: 300,
    despegar: function () {
        console.log("despegando");
    },
    volar: function () {
        console.log("Llegando al destino");
    },
    aterrizar: function () {
        console.log("aterrizando");
    },
};

const Paquete = {
    contenido: ["camiseta", "zapatos", "libro", "reloj"],
};

const Pais = {
    numHabitantes: 48500000,
    continente: "Europa",
    gentilicio: "Español / española",
};

const O_Error = {
    codigo: 1234656789,
};

let codError = O_Error.codigo;

const Grupo = {
    integrantes: [],
};

let integrantes = Grupo.integrantes;

let nivelesTinta = Impresora.tinta;

const Pantalla = {
    bidimensionalpixeles: [
        // bidimensional array de arrays , arrays dentro de un array
        ["blanco", "negro", "blanco"],
        ["negro", "blanco", "negro"],
        ["blanco", "negro", "blanco"],
    ],
};

let pixeles = Pantalla.bidimensionalpixeles;

const Movil = {
    especificaciones : {}, 
};

let especificaciones = Movil["especificaciones"];


