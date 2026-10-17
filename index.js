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
};

Impresora.imprimiendo = {
    nombreArchivo: "documentos word",
    copias: 2,
    numPaginas: 5,
};

