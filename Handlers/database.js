const ewing = require("ewingdb")

module.exports = (client) => {
  client.dataskin = new ewing({
    dbName: 'skin',
    dbFolder: 'Database',
    noBlankData: true,
    readable: true,
    language: 'tr'
  });

  client.databasvuru = new ewing({
    dbName: 'basvuru',
    dbFolder: 'Database',
    noBlankData: true,
    readable: true,
    language: 'tr'
  });

  client.datasunucu = new ewing({
    dbName: 'sunucu',
    dbFolder: 'Database',
    noBlankData: true,
    readable: true,
    language: 'tr'
  });
    
  client.datamoderasyon = new ewing({
      dbName: 'moderasyon',
      dbFolder: 'Database',
      noBlankData: true,
      readable: true,
      language: 'tr'
  });
}