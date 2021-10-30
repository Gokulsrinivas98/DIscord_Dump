const Discord = require('discord.js');

const client = new Discord. Client();
const prefix = '-';
const fs =require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Ad is online!');
});
let arr=[ ];
let narr =[ ];

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    narr[0] = message.author;
    narr[1] = message.author.id;
    narr[2] = message.guild.roles.cache.find(r=> r.name === 'Sell');
    
    if(command === 'sellon'){
        client.commands.get('sellon').execute(message,args,arr,narr);               
    }    
    if (command === 'host'){ 
        narr[3]= message.mentions.users.first().id
        client.commands.get('host').execute(message,args,arr,narr);
    }
    if (command === 'selloff'){
        client.commands.get('selloff').execute(message,args,arr);
    }
    if (command === 'help'){
        client.commands.get('help').execute(message,args);      
}});
client.login('NzM3MzU1MzA2MzUwMTQ5Njc2.Xx8JpA.Fel9oGj1M7pLd5sGHOlsjp859Ws');
// client.login(process.env.token);