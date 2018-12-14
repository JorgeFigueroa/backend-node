var express = require('express');

var app = express();

const path = require('path');
var fs = require('fs');


app.get('/:tipo/:img', (req, res, next) => {

    var tipo = req.params.tipo;
    var img = req.params.img;

    var pathImagen = path.resolve( __dirname , `../uploads/${ tipo }/${ img }`);

    // var path = `./uploads/${ tipo }/${ img }`;
    
    if ( fs.existsSync(pathImagen)){
        res.sendfile(path);
    }
    else {
        var pathNoImagen = path.resolve( __dirname , '../assets/no-img.jpg');
        res.sendfile(pathNoImagen);
    }

    // fs.exists(path, existe => {
    //
    //     if (!existe) {
    //         path = './assets/no-img.jpg';
    //     }
    //
    //     res.sendfile(path);
    //
    // });

});

module.exports = app;