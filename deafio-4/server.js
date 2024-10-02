import express from 'express'

const app = express()
const PORT = 3000;

const materia = {
    id: '2044',
    name: 'Aplicaciones Hibridas',
    dias: [
        {dia: 'Martes', hora: '21:10'},
        {dia: 'Miercoles', hora: '21:10'}
    ]
}

const profesor = {
    name: 'Camila Belén Marcos Galban',
    mail: 'camila.marcosgalban@davinci.edu.ar'
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

app.get('/profesor', (req, res) => {

    res.status(200)
        .json(profesor)
})

app.listen(PORT, () => console.log('El Servidor está funcionando'))
