const express = require('express');
const router = express.Router();
const atividadesController = require('../controllers/atividadesController');

router.get('/', atividadesController.listarAtividades, (req, res) =>{
    res.render('landing-page.ejs');
});

module.exports = router;