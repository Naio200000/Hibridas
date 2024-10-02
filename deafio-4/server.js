import express from 'express'

const app = express()
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {

    res.status(200)
        .send('Nicolas Alsinet')
})

app.listen(PORT, () => console.log('El Servidor está funcionando'))
