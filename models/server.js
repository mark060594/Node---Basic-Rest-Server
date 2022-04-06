const express = require('express')
var cors = require('cors')


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';


        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Read and Parsing body
        this.app.use( express.json() );


        // Public Directory
        this.app.use( express.static('public') );

    }

    routes() {

        this.app.use(this.usersPath, require('../routes/user'))
        
    }

    listen () {

        this.app.listen(this.port , () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }


}


module.exports = Server;