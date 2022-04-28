const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //Data base connection
        this.connectDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
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