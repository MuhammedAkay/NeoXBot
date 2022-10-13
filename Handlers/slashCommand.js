const fs = require("fs");
const chalk = require("chalk");

const { REST, Routes, PermissionsBitField } = require("discord.js");

const AsciiTable = require("ascii-table");
const table = new AsciiTable()
  .setHeading("Slash Komut", "Durumu")
  .setBorder("|", "=", "0", "0");

const TOKEN = process.env.token;
const ClientId = '992875196681814027';

const rest = new REST({ version: "10" }).setToken(TOKEN);

module.exports = (client) => {
  const slashCommands = [];

  fs.readdirSync("./SlashCommands/").forEach(async (dir) => {
    const files = fs
      .readdirSync(`./SlashCommands/${dir}/`)
      .filter((file) => file.endsWith(".js"));

    for (const file of files) {
      const slashCommand = require(`../SlashCommands/${dir}/${file}`);
      slashCommands.push({
        name: slashCommand.name,
        description: slashCommand.description,
        type: slashCommand.type,
        options: slashCommand.options ? slashCommand.options : null,
        default_permission: slashCommand.default_permission
          ? slashCommand.default_permission
          : null,
        default_member_permissions: slashCommand.default_member_permissions
          ? PermissionsBitField.resolve(
              slashCommand.default_member_permissions
            ).toString()
          : null,
      });

      if (slashCommand.name) {
        client.slashCommands.set(slashCommand.name, slashCommand);
        table.addRow(file.split(".js")[0], "✅");
      } else {
        table.addRow(file.split(".js")[0], "⛔");
      }
    }
  });
  console.log(chalk.red(table.toString()));

  (async () => {
    try {
      //console.log(chalk.yellow('(/) Slash Komutlar Yenileme Başlatıldı.'));

    /*console.log(chalk.yellow('(/) Slash Komutlar Siliniyor.'));
      
await rest.put(Routes.applicationCommands(ClientId), { body: [] })
 console.log(chalk.yellow('(/) Slash Komutlar Silindi.'));*/

//console.log(chalk.yellow('(/) Slash Komutlar Yükleniyor.'));
		await rest.put(
			Routes.applicationCommands(ClientId), { body: slashCommands }, );

  console.log(chalk.green("(/) Slash Komutlar Yüklendi"));
    } catch (error) {
      console.log(error);
    }
  })();
};
