const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "Ping",
  aliases: ["pg"],
  description: "Ping",
  execute(message, client) {

    let PingEmbed = new MessageEmbed()
      .setTitle("RINme Ping")
      .setDescription("OKAY")
      .setColor("#F8AA2A");

      PingEmbed.addField(
        `**🏓 Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms**`,
        true
      );

    PingEmbed.setTimestamp();

    return message.channel.send(PingEmbed).catch(console.error);
  }
};
