const { response, request } = require('express');

const Usuario = require('../models/user');

const usersGet = (req = request , res = response) => {

    //Reading query params
    const {id, page} = req.query;

    res.json({
        msg:'get API',
        id,
        page

    });
  }

const usersPost = async(req, res) => {

    //Reading the content body
    const body = req.body;

    //Instance model
    const usuario = new Usuario( body );

    //To save information in data base
    await usuario.save();

    res.json({
        msg:'post API',
        usuario
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
