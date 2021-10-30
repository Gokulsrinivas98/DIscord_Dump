module.exports = {
    name: 'sellon',
    description: "This is the sell lobby on command!",
    execute(message,args,arr,narr){
        // arr.push(msgai);
        arr.push(narr[1]);
        
        
        message.channel.setName(`🟢┋sell-lobby`)
            .catch(console.error);
        
        // message.channel.send(`${msga} is hosting a ${SellRoleObject} lobby`);
        message.channel.send(`${narr[0]} is hosting a ${narr[2]} lobby`);
        
        message.delete();
    }

}