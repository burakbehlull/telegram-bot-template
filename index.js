const { Bot } = require('./libs/Bot')

const bot = new Bot()

bot.command('/merhaba', (message)=>{
    bot.message(message.chat.id, "Merhaba!")
})