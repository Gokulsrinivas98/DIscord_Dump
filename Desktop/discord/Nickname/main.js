// const Discord = require ('discord.js');
// const bot = new Discord.Client();
// const prefix = 'r*'
// bot.on('ready', () => {
//     console.log('Ad2 is online!')
// });

// bot.on ('message', message =>{
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//   const args = message.content.slice(prefix.length).trim().split(/ +/);
//   const command = args.shift().toLowerCase();
//   let msga = args[0];
//   //let role = message.guild.roles.cache.find(r=> r.name === 'Sell');
//   //let founderRole = message.guild.roles.cache.find("name", "Founder");
//   //let modRole = message.guild.roles.cache.find("name", "Moderator");
//   //let HelperRole = message.guild.roles.cache.find("name", "Helper");
//   if (!(message.member.roles.cache.find(r=> r.name === 'Founder') || message.member.roles.cache.find(r=> r.name === 'Moderator') ||message.member.roles.cache.find(r=> r.name === 'Helper')  )){
//     if(!message.member.roles.cache.find(r=> r.name === 'Sell')){
//       if (command === 'sc') {
//         if (!args.length) {
//             message.channel.send(`You didn't provide any Social Club account, ${message.author}!`).then(sentMessage => {
//             sentMessage.delete({ timeout: 5000 });});
//             message.delete({ timeout: 5000 })
//         }
  
//     //message.channel.send(`${args[0]}`);
//       message.member.setNickname(`${args[0]}`).catch(console.error);
//       //message.member.roles.add(role)
//     }}
//     else{message.channel.send(`You have already provided your Social Club`).then(sentMessage => {
//       sentMessage.delete({ timeout: 5000 });});
//       }}
//   else{message.channel.send(`Cant change legend's nicknames. Sorry!`).then(sentMessage => {
//     sentMessage.delete({ timeout: 5000 });});
//     message.delete({ timeout: 5000 })}  
 
//   //if (command === 'sc'){
//     //message.member.setNickname(`${args[0]}`)
//       //.catch(console.error);
//   //}
  
  
  
//   let msgai=message.author.id;
//   let SellRoleObject = message.guild.roles.cache.find(r=> r.name === 'Sell');
//   //if(command === 'sellon'){
//     //  message.channel.setName(`🟢┋sell-lobby`)
//       //    .catch(console.error);
      
//       //message.channel.send(`${msga} is hosting a ${SellRoleObject} lobby`);
//       //message.delete();
      
//   });

const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
    bot.guilds.cache.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "#auto-text-test";
         guild.channels.cache.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "#auto-text-test") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
         setInterval (function () {
              defaultChannel.send("!d bump") //send it to whatever channel the bot has permissions to send on
         }, 6 * 1000);
   })
})
 bot.login('NzM3NTk1NTYzMDQxODgyMTky.Xx_pZg.dSYV3cIVDh84qU3NQN5KI4ojysY');