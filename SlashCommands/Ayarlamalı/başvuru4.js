const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'başvuru-soru-ekle',
  description: 'Başvuru Soruları Eklersiniz.',
  type: ApplicationCommandType.ChatInput,
  default_member_permissions: 'ManageGuild',
  cooldown: 3000,
  options: [
      {
          name: 'soru',
          description: 'Eklenecek Soru',
          type: 3,
          required: true
      },
  ],
  run: async (client, interaction) => {
    const data = client.databasvuru;
      
      const kontrol = data.get(`${interaction.guild.id}_basvuruSorular`);
      if(kontrol.length >= 15) {
          interaction.reply('Maksimum 15 Soru Ekleme Hakkınız Vardır')
      return;
      };
      
      const soru = interaction.options.getString('soru');
      
      const embed = new EmbedBuilder()
      .setColor('Random')
      .setTitle('Başarılı')
      .setDescription(`**${soru}** Başvuru Sorularına Eklendi.`)
      .setTimestamp()
      .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
      
      interaction.reply({ embeds: [embed] })
      data.push(`${interaction.guild.id}_basvuruSorular`, soru)
  },
};