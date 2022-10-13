const { 
  EmbedBuilder,
  ApplicationCommandType 
} = require("discord.js");

module.exports = {
  name: "sunucu-bilgi",
  description: "Sunucunuzun Bilgilerini Gösterir.",
  type: ApplicationCommandType.ChatInput,
  cooldown: 3000,
  run: async (client, interaction) => {
      
await interaction.guild.members.fetch();
const members = interaction.guild.members.cache;
const channels = interaction.guild.channels.cache;
const emojis = interaction.guild.emojis.cache.size;
const firstFiveEmojis = interaction.guild.emojis.cache.map(emoji => emoji).slice(0, 10).join(' ');
const boostCount = interaction.guild.premiumSubscriptionCount;
const verificationLevel = interaction.guild.verificationLevel;
const rolesCount = interaction.guild.roles.cache.size;

        const embed = new EmbedBuilder()
            .setColor('Random')
            .setAuthor({ name: `${interaction.guild.name} Sunucusunun Bilgileri`, iconURL: interaction.user.displayAvatarURL({ dynamic: true, size: 1024, format: 'png' }) })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 1024, format: 'png' }))
            .addFields(
                { 
                    name: '🆔 Sunucu ID:', 
                    value: `${interaction.guildId}`, 
                    inline: true 
                },
                { 
                    name: '📆 Kuruluş Tarihi:', 
                    value: `**<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:R>**`, 
                    inline: true 
                },
                { 
                    name: '👑 Sunucu Sahibi:', 
                    value: `<@!${interaction.guild.ownerId}>`, 
                    inline: true 
                },
                { 
                    name: `👥  Üyeler (${interaction.guild.memberCount}):`, 
                    value: `**${members.filter(member => member.presence?.status === 'online').size + members.filter(member => member.presence?.status === 'idle').size + members.filter(member => member.presence?.status === 'dnd').size}** Aktif | Boşta | Rahatsız Etme\n**${members.filter(member => !['online', 'idle', 'dnd'].includes(member.presence?.status)).size}** Aktif Değil\n**${members.filter(member => member.user.bot).size}** Bot`, 
                    inline: true 
                },
                { 
                    name: `💬 Kanallar (${interaction.guild.channels.cache.size}):`, 
                    value: `**${channels.filter(channel => channel.type === 0).size}** Yazı | **${channels.filter(channel => channel.type === 2).size}** Ses\n**${channels.filter(channel => channel.type === 4).size}** Kategori`, 
                    inline: true 
                },
                { 
                    name: `🌐 Diğerleri:`, 
                    value: `Doğrulama Seviyesi: **${verificationLevel}**\nBoostlar: **${boostCount}** ${client.config.emoji.boost}\nRoller: **${rolesCount}**`, 
                    inline: true 
                },
                { 
                    name: `🛡️ Emojiler (${emojis}):`, 
                    value: `**${firstFiveEmojis}**`, 
                    inline: true 
                },
            )
        .setTimestamp()
        .setFooter({ text: `${interaction.user.username} Tarafından İstendi.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true })})

        interaction.reply({ embeds: [embed] });
  },
};