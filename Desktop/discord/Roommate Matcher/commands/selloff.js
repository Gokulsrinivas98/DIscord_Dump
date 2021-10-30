module.exports = {
    name: 'selloff',
    description: "This is the sell lobby off command!",
    execute(message,args,arr){
        message.channel.setName(`🔴┋sell-lobby`)
        .catch(console.error);
     
    async function clear() {
        message.delete();
        const fetched = await message.channel.messages.fetch({limit: 99});
        const notPinned = fetched.filter(fetchedMsg => !fetchedMsg.pinned);
        message.channel.bulkDelete(notPinned,true)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
    arr.length=0;      
    clear();
    }}