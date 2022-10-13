const { 
  EmbedBuilder,
  ButtonBuilder,
  ButtonType,
  SelectMenuBuilder,
  ActinRowBuilder,
  ChannelType,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: 'sıfırla',
  description: 'Yapılı Ayarı Sıfırlarsınız.',
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  default_member_permissions: 'ManageGuild',
  options: [
        {
          name: 'istek-kanal',
          description: 'Skin İstek Kanalını Sıfırlarsınız.',
          type: 1
        },
        {
          name: 'şablon-kanalı',
          description: 'Şablon Kanallarını Sıfırlarsınız.',
          type: 2,
          options: [
            {
              name: 'bsu',
              description: 'Bus Simulator Ultimate Şablon Ayarını Sıfırlarsınız.',
              type: 1
            },
            {
              name: 'tsu',
              description: 'Truck Simulator Ultimate Şablon Ayarını Sıfırlarsınız.',
              type: 1
            },
            {
              name: 'toe3',
              description: 'Truckers Of Europe 3 Şablon Ayarını Sıfırlarsınız.',
              type: 1
            },
          ],
        },
  ],
  
  run: async (client, interaction) => {
//Datalar
  const skin = client.dataskin;
  const sunucu = client.datasunucu;

//SubCommand
    const sub1 = interaction.options.getSubcommand('istek-kanal');
    const sub2 = interaction.options.getSubcommand('bsu');
    const sub3 = interaction.options.getSubcommand('tsu');
    const sub4 = interaction.options.getSubcommand('toe3');

//Kontroller
    const kontrol1 = skin.has(`${interaction.guild.id}_skinİstekKanalı`);
    const kontrol2 = skin.has(`${interaction.guild.id}_busSimulatorUltimate`);
    const kontrol3 = skin.has(`${interaction.guild.id}_truckSimulatorUltimate`);
    const kontrol4 = skin.has(`${interaction.guild.id}_TruckersOfEurope3`);

//Sub1 = Skin İstek Kanalı
    if(sub1) {
      if(!kontrol1) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Skin İstek Kanalı Zaten Ayarlanmamış.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      
      if(kontrol1) {
        const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription('Skin İstek Kanalı Sıfırlandı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        skin.delete(`${interaction.guild.id}_skinİstekKanalı`)
      };
      
      return;
    };

//Sub2 = Bus Simulator Ultimate
    if(sub2) {
      if(!kontrol2) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Bus Simulator Ultimate Şablon Kanalı Zaten Ayarlanmamı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };
      
      if(kontrol2) {
        const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription('Bus Simulator Ultimate Şablon Kanalı Ayarı Sıfırlandı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        skin.delete(`${interaction.guild.id}_busSimulatorUltimate`)
      };

      return;
    };

//Sub3 = Truck Simulator Ultimate
    if(sub3) {
      if(!kontrol3) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Truck Simulator Ultimate Şablon Kanalı Zaten Ayarlanmamı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };

      if(kontrol3) {
        const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription('Truck Simulator Ultimate Şablon Kanalı Ayarı Sıfırlandı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        skin.delete(`${interaction.guild.id}_truckSimulatorUltimate`)
      };
      
      return;
    };

//Sub4 = Truckers Of Europe 3 
    if(sub4) {
      if(!kontrol4) {
  const embed = new EmbedBuilder()
        .setColor('Red')
        .setTitle('Başarısız')
        .setDescription('Truckers Of Europe 3 Şablon Kanalı Zaten Ayarlanmamış.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        return;
      };

      if(kontrol4) {
        const embed = new EmbedBuilder()
        .setColor('Green')
        .setTitle('Başarılı')
        .setDescription('Truckers Of Europe 3 Şablon Kanalı Ayarı Sıfırlandı.')
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed]})
        skin.delete(`${interaction.guild.id}_truckersOfEurope3`)
      };
      
      return;
    };
    
  },
};