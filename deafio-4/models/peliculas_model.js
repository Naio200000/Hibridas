import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../data/peliculas.json')

function readPeliculasFile () {

    const peliculas = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(peliculas);
    
}

export {readPeliculasFile}