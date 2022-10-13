const chalk = require("chalk");
const fs = require("fs");
var AsciiTable = require("ascii-table");
var table = new AsciiTable();
table.setHeading("Events", "Stats").setBorder("|", "=", "0", "0");

module.exports = (client) => {
  fs.readdirSync("./Events/").forEach((dir) => {
    const files = fs
      .readdirSync(`./Events/${dir}/`)
      .filter((file) => file.endsWith(".js"));
    files.forEach((event) => {
require(`../Events/${dir}/${event}`);
  
        table.addRow(event.split(".js")[0], "✅");
      
    });
  });
  console.log(chalk.blue(table.toString()));
};
