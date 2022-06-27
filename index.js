const{Client,Intents}=require('discord.js');
const client=new Client({intents:[Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES]});
const configuration = require("./config.json");

client.once('ready',() => {
   console.log("Je marche a 100% !");
});

client.on("message", message => {
    if (message.content === "!formationblender"){
        message.channel.send("https://www.paypal.me/WolzZert")
        console.log("blender formation");
    }

});

client.on("message", message => {
    if (message.content === "!botdiscord"){
        message.channel.send("https://py.pl/1lg8xl")
        console.log("bot discord");
    }

});

client.on("message", message => {
    if (message.content === "!serveurdiscord"){
        message.channel.send("https://py.pl/1lg8xl")
        console.log("serveur discord");
    }
});

client.on("message", message => {
    if (message.content === "!paypalfr11zox"){
        message.channel.send("https://py.pl/1lg8xl")
        console.log("paypal fr11zox");
    }
});

client.on("message", message => {
    if (message.content === "!paypalwolz"){
        message.channel.send("https://www.paypal.me/WolzZert")
        console.log("paypal wolz");
    }
});

client.login("OTg5OTg0MjA4MTU4MDgxMDY0.GeTZWR.cDw2DAwNaEHJi_It2Zu-nKhj0OcgmXTuP63jbc");