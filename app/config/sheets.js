const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('14bLyhRhfclC3x9iAqt6JvaeeE3phmikOilTEKE_We2o');

async function getSheetData() {
  await doc.useServiceAccountAuth(require('./service-account.json'));
  await doc.loadInfo();
  
  const sheet = doc.sheetsByTitle['Página1'];
  const rows = await sheet.getRows();
  
  return rows.map(row => ({
      ativo: row.ativo === 'TRUE',
      tipo: row.tipo,
      nome: row.nome_atividade,
      imagem: row.imagem_url,
      periodo: row.periodo_ou_data,
      link: row.link 
    }));
}

module.exports = {
  getSheetData,
  doc
};