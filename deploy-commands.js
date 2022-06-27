const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { ROUTES } = require("discord-api-types/v9");
const { clientId, guildID, token } = require("./config.json");

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter(file => FileSystem.endsWith(".js"));
for (const file of commandFiles) {
    const command = require("./commands/${file")
    commandFiles.push(command.data.toJSON());
}

const rest = new REST({version: "9"}).setToken(token).addListener
(async ()=> {
    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildID), {body: commands});
        console.log("Les commandes ont ete enregistrer !")
    }   catch (error) {
        console.error(error);
    }
})();