const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandIteraction } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ton ping"),
    /**
     * 
     * @param {CommandIteraction} interaction 
     */
    async execute (interaction) {
await interaction.reply("https://discord.com/channels/@me/985978326688624680/989990325256867840");

            const message = await interaction.fetchReply();
            return interactioneditReply("Le message a mis ${message.createdTimestamp - interaction.createdTimestamp} ms pour me parvenir et te revenir./nTon ping est de ${interaction.client.ws.ping}");
        
        }
}