const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
  GuildMember
} = require("discord.js");

const client = new Client({
  intents: [3276799],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction,
  ],
  allowedMentions: { parse: ['users', 'roles'], repliedUser: false },
    partials: [ 
Partials.User, 
Partials.Channel, 
Partials.GuildMember, 
Partials.Message, 
Partials.Reaction, 
Partials.GuildScheduledEvent, 
Partials.ThreadMember 
],

});
reuire('dotenv').config;
const config = require("./config.js");

client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
client.prefix = config.prefix;
client.config = config;
client.emoji = config.emoji;
client.iemoji = config.emoji.i;

module.exports = client;

["slashCommand", "events", "database" ].forEach((handler) => {
  require(`./Handlers/${handler}`)(client);
});


client.login(process.env.token);
require('uptime-discord-bot');

client.on('ready', () => {
  var testChannel = client.channels.cache.find(channel => channel.id === '1029501254071750707');

  setInterval(() => {
    testChannel.send('Bot Aktif');
  }, 90000);
});
