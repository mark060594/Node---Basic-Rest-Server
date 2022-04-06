const { response, request } = require('express');

const usersGet = (req = request , res = response) => {

    //Reading query params
    const {id, page} = req.query;

    res.json({
        msg:'get API',
        id,
        page

    });
  }

const usersPost = (req, res) => {

    //Reading the content body
    const {Nombre, Apellido} = req.body;

    res.json({
        msg:'post API',
        Nombre,
        Apellido
    });
  }

  const usersPut = (req, res) => {

    //Reading params
    const { id } = req.params;
    

    res.json({
        msg:'post API',
        id
    });
  }


const usersDelete = (req, res) => {
    res.json({
        msg:'delete API'
    });
  }

const usersPatch = (req, res) => {
    res.json({
        msg:'patch API'
    });
  }

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}  
