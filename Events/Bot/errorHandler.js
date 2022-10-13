const { EmbedBuilder, WebhookClient } = require("discord.js");
const client = require("../..");
const resim = 'https://cdn.discordapp.com/avatars/992875196681814027/f0d7f041408f329d059f49163f8cc3bb.png?size=1024';
const webhookClient = new WebhookClient({ url: 'https://discord.com/api/webhooks/1004807041480675421/J2jDBxGT8Qr8W4MB22wenjKfNkvSypLUk55rpSt05sGsd2YQBGd6d9_0urKbRM5fislo' });

//Error
process.on("error", (error) => {
  const embed = new EmbedBuilder()
    .setTitle("Error")
    .setDescription(`\`\`\`\n${error}\n\`\`\``)
    .setColor("#ff0000")
    .setTimestamp()
    

  webhookClient.send({
	username: 'Hata',
	avatarURL: resim,
	embeds: [embed],
});
  console.error("Error:", error);
});

//Warning 
process.on("warning", warning => {
  //console.log(warning)
});

//Unhandled Rejection
process.on("unhandledRejection", (error) => {
  const embed = new EmbedBuilder()
    .setTitle("Unhandled Rejection")
    .setDescription(`\`\`\`\n${error}\n\`\`\``)
    .setColor("#ff0000")
    .setTimestamp()
    

  webhookClient.send({
	username: 'Hata',
	avatarURL: resim,
	embeds: [embed],
});
  console.error("Unhandled promise rejection:", error);
});

//Uncaught Exception
process.on("uncaughtException", (error) => {
  const embed = new EmbedBuilder()
    .setTitle("Uncaught Exception")
    .setDescription(`\`\`\`\n${error}\n\`\`\``)
    .setColor("#ff0000")
    .setTimestamp()
    

  webhookClient.send({
	username: 'Hata',
	avatarURL: resim,
	embeds: [embed],
});
  console.error("Uncaught Exception:", error);
});