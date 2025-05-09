const { getSheetData } = require('../config/sheets');

async function listarAtividades(req, res) {
  try {
    const atividades = await getSheetData();
    
    res.render('landing-page', { 
      atividades: atividades
    });
    
  } catch (error) {
    console.error('Erro ao listar atividades:', error);
    res.status(500).send('Erro ao carregar atividades');
  }
}

module.exports = {
  listarAtividades
};