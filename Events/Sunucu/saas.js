const { EmbedBuilder } = require('discord.js');
const client = require('../..');

client.on('messageCreate', message => {
    
  let kontrol = client.datamoderasyon.has(`${message.guild.id}_saas`)
  var sa = [
      "sa",
      "sea",
      "selamın aleyküm",
      "selamın aleykum",
      "selamun aleyküm",
      "selamun aleykum",
      "selamün aleyküm",
      "selamün aleykum"
  ]

  if(kontrol) {
      let sistem = client.datamoderasyon.get(`${message.guild.id}_saas`);
  if(sistem === 'aktif'){
    if(sa.includes(message.content.toLowerCase())){
      message.reply({ content: `Aleyküm Selam, Hoş Geldin Dostum. ${client.config.emoji.kalp}`, allowedMentions: { repliedUser: true} });
    }
  } else {
    return;
  }
  } else {
      return;
  }
})
