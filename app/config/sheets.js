const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet('1npPOKWu_IyWBK4We-L47KSTWPPt0aUdEMm6KV1VGddY');

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
    const hoje = new Date();
    var ativo = row.ativo;

    if(limiteStr != undefined){
      const dataLimite = parseDataBrasil(limiteStr);
      ativo = (dataLimite >= hoje && row.ativo != 'FALSE');
    }

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