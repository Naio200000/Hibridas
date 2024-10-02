import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, '../data/productos.json')

function readProductsFile () {

    const products = fs.readFileSync(filePath, 'utf8');

    return JSON.parse(products);
    
}