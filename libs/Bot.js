require('dotenv/config')
const TelegramBot = require('node-telegram-bot-api');

class Bot {
    constructor(){
        if(!process.env.TOKEN) return
        this.bot = new TelegramBot(process.env.TOKEN, {polling: true})
    }
    command(name, callback){
        return this.bot.onText(name, (...props)=> callback(...props))
    }
    watchCommand(commandName, callback){
        this.bot.on('callback_query', (...cq)=> {
            const msg = cq.message
            const chatId = msg.chat.id
            const data = cq.data
            if(data===commandName){
                callback(chatId,...cq)
            }
        })
        return
    }
    message(messageId, text, options){
        return this.bot.sendMessage(messageId, text, options)
    }
    
}

module.exports = {
    Bot
}