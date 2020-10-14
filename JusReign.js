const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if (receivedMessage.content.startsWith("$")) {
        processCommand(receivedMessage)
    }

})

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity(" Laal Dupatta", {type: "LISTENING"} )
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "helpmeJusReign") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else if (primaryCommand == 'strong'){
        health(arguments, receivedMessage)
    } else if (primaryCommand == 'friends'){
        friends(arguments, receivedMessage)
    } else if (primaryCommand == 'daal'){
        dall(arguments, receivedMessage)
    } else if (primaryCommand == 'tuff'){
        guy(arguments, receivedMessage)
    } else if (primaryCommand == 'vibe'){
        vibe(arguments, receivedMessage)
    } else if (primaryCommand == 'engineer' || primaryCommand == 'scientist' || primaryCommand == 'doctor'){
        dontknow(arguments, receivedMessage)
    } else if (primaryCommand == 'business' || primaryCommand == 'accounting'){
        accounting(arguments, receivedMessage)
    } else if (primaryCommand == 'hello'){
        hello(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("What did you just said to me? Try $helpmeJusReign cmon man.")
    }
}

function helpCommand(arguments, receivedMessage) {
    if (arguments) {
        receivedMessage.channel.send("My Prefix is '!' try one of my following commands: \n " + "multiply (Ex. 2 4 10) \n strong \n friends \n daal \n vibe \n tuff \n scientist \n engineer \n doctor \n accounting \n business \n hello")
}
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1 
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

function health(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("LOOK MY STRONG")
    }
}

function friends(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send('https://lh3.googleusercontent.com/Xw6QHj8ur4QwdC9GTliS67WQiHV3xANJP0r-JjChku7B-8P-5LwZ7uhOhRQnju21VObQsOc=s131')
        receivedMessage.channel.send("You \n" + "want \n" + "to be \n" + "Stanch Buds?")
    }
}

function vibe(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("https://media1.tenor.com/images/cfe65d48bb150c7d6e6ec44572bc9dc7/tenor.gif?itemid=5441330")
    }
}

function dall(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("https://thumbs.gfycat.com/GivingLeadingDachshund-small.gif")
    }
}

function guy(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("https://fabityofficial.files.wordpress.com/2015/05/tough-guy.gif")
    }
}

function dontknow(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("https://tenor.com/view/gif-18786659")
    }
}

function accounting(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("https://media1.tenor.com/images/a85123d84432d39393a534f25d6c9a1e/tenor.gif?itemid=5441328")
    }
}

function hello(arguments, receivedMessage){
    if(arguments) {
        receivedMessage.channel.send("BONJOUR")
    }
}


client.login("NzY1MTEzNzgzMDA5MDE3ODg2.X4QFvA.7y3ZpfxVi-ZeqYEDrw2HuTeyDwU")