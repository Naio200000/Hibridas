require('dotenv').config

const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;


import primos from "./funciones.cjs";

console.log(primos.esPrimo(4));