module.exports = {
    name: 'host',
    description: "This is the sell lobby host change command!",
    execute(message,args,arr,narr){
        // if(arr.indexOf(men)!==-1){
            if(arr.indexOf(narr[3])!==-1){
            
            arr.splice(arr.indexOf(narr[3]), 1);
            
            arr.push(narr[1]);
            message.delete();
            message.channel.messages.fetch({ limit: 98 }).then(fetchedMessages => {
                const messagesToDelete = fetchedMessages.filter(msg => (msg.author.id === '737355306350149676' && msg.content.includes(`${'<@'+narr[3]+'>'}`,` ${narr[2]} lobby`)));
                return message.channel.bulkDelete(messagesToDelete, true);    }).catch(console.error);
            message.channel.send(`${narr[0]} is hosting ${'<@'+narr[3]+'>'}'s ${narr[2]} lobby`).catch(console.error);
            }
        else{message.channel.send(`${'<@'+narr[3]+'>'} is not hosting a lobby`).then(sentMessage => {
            sentMessage.delete({ timeout: 5000 });});
            message.delete({ timeout: 5000 })}}}