const client = require("../..");
const chalk = require("chalk");

client.on("ready", () => {
/*
  * 0 Oynuyor,
  * 2 Dinliyor,
  * 3 İzliyor,
  * 5 Yarışıyor
  */
  
  const activities = [
    { name: `NeoXBot V1.9.2`, type: 5 },
    { name: `${client.guilds.cache.size} Sunucu`, type: 2 },
    { name: `${client.channels.cache.size} Kanal`, type: 0 },
    { name: `${client.users.cache.size} Kullanıcı`, type: 2 }, 
    { name: `Discord.js v14`, type: 5 },
  ];
  const status = ["online", "dnd", "idle"];
  let i = 0;
  setInterval(() => {
    if (i >= activities.length) i = 0;
    client.user.setActivity(activities[i]);
    i++;
  }, 5000);

  let s = 0;
  setInterval(() => {
    if (s >= activities.length) s = 0;
    client.user.setStatus(status[s]);
    s++;
  }, 30000);
  console.log(chalk.red(`${client.user.tag} İsmi İle Discord'a Giriş Yaptı.`));
});
