const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'başvuru-soru-sil',
  description: 'Başvuru Sisteminde Bulunan Soruyu Silersiniz.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
      {
          name: 'sıra',
          description: 'Başvuru Soru Sırası(Öğrenmek İçin /başvuru-sorular Komutunu Kullanabilirsiniz)',
          type: 4,
          required: true,
          min_value: 1,
          max_value: 15
      },
  ],
  run: async (client, interaction) => {
    const data = client.databasvuru;
      
    const kontrol = data.has(`${interaction.guild.id}_basvuruSorular`);
     if(!kontrol) {
         interaction.reply('Başvuru Soruları Ayarlanmamış')
     return;
     };
      const sıra = interaction.options.getInteger('sıra');
      
      const sorular = data.get(`${interaction.guild.id}_basvuruSorular`);
      
      const embed = new EmbedBuilder()
      .setTitle('Başarılı')
      .setDescription(`**${sıra}** Sırasında Bulunan Soru Silindi.`)
      .setColor('Yellow')
      .setTimestamp()
      .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})
      
      data.delByPriority(`${interaction.guild.id}_basvuruSorular`, sıra)
      
      interaction.reply({ embeds: [embed] });
  },
};