const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'app/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views/pages'));

const atividadesRoutes = require('./app/routes/rotas');
app.use('/', atividadesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});