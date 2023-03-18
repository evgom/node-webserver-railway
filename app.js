require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;




// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', err => {
    console.log('error', err);
});



// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Gabriel Osorio',
        titulo: 'Curso de Node'
    }); // Controlador
});


// Tiene prioridad el contenido estático sobre las rutas

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gabriel Osorio',
        titulo: 'Curso de Node'
    }); // Controlador
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gabriel Osorio',
        titulo: 'Curso de Node'
    }); // Controlador
});


app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/old/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
