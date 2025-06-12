const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('14bLyhRhfclC3x9iAqt6JvaeeE3phmikOilTEKE_We2o');

function parseDataBrasil(dataStr) {
  const [dia, mes, ano] = dataStr.split('/');
  return new Date(`${ano}-${mes}-${dia}`);
}

async function getSheetData() {
  await doc.useServiceAccountAuth(require('./service-account.json'));
  await doc.loadInfo();
  
  const sheet = doc.sheetsByTitle['Página1'];
  const rows = await sheet.getRows();
  
  return rows.map(row => {
    const limiteStr = row.data_pra_sumir;
    const dataLimite = parseDataBrasil(limiteStr);
    const hoje = new Date();
    
    const ativo = dataLimite >= hoje && row.ativo != 'FALSE';

    return {
      ativo: ativo,
      tipo: row.tipo,
      nome: row.nome_atividade,
      imagem: row.imagem_url,
      periodo: row.periodo_ou_data,
      link: row.link,
      limite: limiteStr
    };
  });
}

module.exports = {
  getSheetData,
  doc
};