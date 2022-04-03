const express = require('express');

const app = express();

const userController = require('./controller/user.controller');
const galleryController=require('./controller/gallery.controller')

app.use(express.json());

app.use('/users', userController);
app.use('/gallery',galleryController)

module.exports = app;
