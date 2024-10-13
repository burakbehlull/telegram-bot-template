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
    on(callback){
        return this.bot.on('callback_query', (...cq)=> callback(...cq))
    }
    message(messageId, text, options){
        return this.bot.sendMessage(messageId, text, options)
    }
    
}

module.exports = {
    Bot
}