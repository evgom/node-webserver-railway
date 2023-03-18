const http = require('http');

const puerto = 8080;

http.createServer((req, res) => {
    // console.log(req);

    /* // Json response
    res.writeHead(200, {'Content-Type': 'application/json'});

    const persona = {
        id: 1,
        nombre: 'Gabriel'
    }

    res.write(JSON.stringify(persona));
    */

    // CSV response
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });
    res.write('id, nombre\n');
    res.write('1, Erick\n');
    res.write('2, Victor\n');
    res.write('3, Gabriel\n');
    res.write('4,  Manuel\n');


    res.end();

})
    .listen(puerto);

console.log('Escuchando el puerto', puerto);