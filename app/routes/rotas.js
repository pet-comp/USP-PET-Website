const express = require('express');
const router = express.Router();
const atividadesController = require('../controllers/atividadesController');

router.get('/', atividadesController.listarAtividades, (req, res) =>{
    res.render('landing-page.ejs');
});

router.get('/petlearn', (req, res) =>{
    res.render('petlearn.ejs');
});

module.exports = router;