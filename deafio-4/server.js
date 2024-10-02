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

const peliculas = [
    {id: 1, title: 'El viaje de Chijiro', release: '2001'},
    {id: 2, title: 'La princesa Mononoke', release: '1997'},
    {id: 3, title: 'El viento se levanta', release: '2013'},
    {id: 4, title: 'El castillo ambulante', release: '2004'},
    {id: 5, title: 'Porco Rosso', release: '1992'},
]

app.use(express.json());



app.get('/', (req, res) => {

    res.status(200)
        .json({mensaje:'Nicolas Alsinet'})
})

app.get('/materia', (req, res) => {

    res.status(200)
        .json(materia)
})

app.get('/profesor', (req, res) => {

    res.status(200)
        .json(profesor)
})

// Peliculas

app.get('/peliculas', (req, res) => {

    res.status(200)
        .json(peliculas)
})

app.get('/peliculas/:id', (req, res) => {

    const peliculasId = parseInt(req.params.id);

    if (peliculas.some(p => p.id === peliculasId)) {

        res.status(200)
            .json({mensaje:'La película ya se encuentra en Favoritos'});
        } else {

        res.status(404)
            .json({mensaje: 'No se encontró la Película'});
            
    }

    res.status(200)
        .json(peliculas)
})

app.use((req, res) => {

    res.status(404)
        .json({mensaje: 'No se encontró la pagina que está buscando'})
})

app.listen(PORT, () => console.log('El Servidor está funcionando'))
