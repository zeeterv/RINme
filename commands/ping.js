const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["png"],
  description: "PONG!",
  execute(client, message) {
    let commands = message.client.commands.array();

    let pingEmbed = new MessageEmbed()
      .setTitle("RINme's ping")
      .setDescription("Show how many ping of RINme")
      .setColor("#c70c02");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);**`
        true
      );
    });

    pingEmbed.setTimestamp();

    return message.channel.send(pingEmbed).catch(console.error);

  }
};