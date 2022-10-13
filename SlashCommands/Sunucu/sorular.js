const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'başvuru-sorular',
  description: 'Sunucunuzun Başvuru Sorularını Gösterir.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageMessages',
  run: async (client, interaction) => {
   
    const data = client.databasvuru;
    const kontrol = data.has(`${interaction.guild.id}_basvuruSorular`);
     if(!kontrol) {
         interaction.reply('Başvuru Soruları Ayarlanmamış')
     return;
     };
      const ks1 = data.get(`${interaction.guild.id}_basvuruSorular`);
      
    const embed = new EmbedBuilder()
    .setTitle(`${interaction.guild.name} Sunucusunun Başvuru Soruları`)
    .setDescription(ks1.map(soru => soru).map((soru, sıra) => `**${sıra + 1})** ${soru}`).join('\n'))
    .setColor('Random')
    .setTimestamp()
    .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
    interaction.reply({ embeds: [embed] });
      
  },
};