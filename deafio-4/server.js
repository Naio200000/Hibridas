import express from 'express'

const app = express()
const PORT = 3000;

const materia = {
    id: '2044',
    name: 'Aplicaciones Hibridas',
    prof: 'Camila Belén Marcos Galban',
    dias: [
        {dia: 'Martes', hora: '21:10'},
        {dia: 'Miercoles', hora: '21:10'}
    ]
}

app.use(express.json());

app.get('/', (req, res) => {

    res.status(200)
        .send('Nicolas Alsinet')
})

app.get('/materia', (req, res) => {

    res.status(200)
        .json(materia)
})

app.listen(PORT, () => console.log('El Servidor está funcionando'))
