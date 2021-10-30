module.exports = {
    name: 'help',
    description: "This is the help command!",
    execute(message,args){
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#0099ff')
	        .setTitle('Sell Lobby Status Bot')
	        //.setURL()
	        
	        .setDescription('Pings all the users with @Sell role when a sell lobby is hosted by a member')
	        .setThumbnail('https://media.giphy.com/media/ADgfsbHcS62Jy/giphy.gif')
	        .addFields(
		        //{ name: 'Sell Commands:',value:' ' },
                //{ name: '\u200B', value: '\u200B' },
                
		        { name: 'Hey! Hope this helps you.\n\n Sell Commands:\n\n📍 -sellon', value: 'Pings members with @Sell role and changes the red dot into green',  },
                { name: '📍 -selloff', value: 'Reverts back the green dot to red and clears the channel'},
                {name : '📍 -host @existing host' , value:'Replaces the old host with the new host '}
	)
	        //.addField('Inline field title', 'Some value here', true)
	        
	        .setTimestamp()
	        .setAuthor('Adroxxus','https://cdn.discordapp.com/embed/avatars/0.png','https://discord.com/channels/@me/738806953714647153')

        message.channel.send(exampleEmbed);
        message.delete();
    }}