const mongoose = require('mongoose');


const dbConnection = async() => {

   try {

          await mongoose.connect(process.env.MONGODB_CNN, {

            useNewUrlParser:true,
            useNewUrlParser: true,
            useUnifiedTopology: true

       })

       console.log('Data Base online');

    }catch(error) {
        console.log(error,'There is an error');
        throw new Error('Inicialization data base error')
    }

}

module.exports = {
    dbConnection
}