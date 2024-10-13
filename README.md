# Telegram Bot Template


### Set up:
` npm install `


` base.js `
| Command |  About |  Use | 
| -------- |  -------- |  -------- | 
| .command("/example", call function) |  Add bot command |  Bot.command("/example", callback function) | 
| .watchCommand() |  .. |  Bot.watchCommand("/example", callback function) | 


` components.js `
| Class |  About | Use | 
| -------- |  -------- |  -------- | 
| MessageButtons | user helper classes |.. | 


### MessageButtons
```js
const msgBtns = new AddMessageButtons()
msgBtns.add(commandName, callback function)
msgBtns.build()
```