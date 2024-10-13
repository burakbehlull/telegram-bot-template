
class MessageButtons {
    constructor(){
        this.buttons = []
    }
    add(text, eventName){
        return this.buttons.push({text: text, callback_data: eventName})
    }
    build(){
        const options = {
            reply_markup: {
                inline_keyboard: [
                    this.buttons
                ]
            }
        }
        return options
    }
}

module.exports = {
    MessageButtons
}