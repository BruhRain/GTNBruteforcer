const { Client } = require('discord.js-selfbot-v13');
const fs = require('fs');

const cfg = require('./config.json');
const number = fs.readFileSync('./number.prediction', 'utf8');

const bot = new Client({
    checkUpdate: false,
});

bot.on('ready', async() => {
    console.log(`${bot.user.username}: started`);
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let table = []

bot.on('messageCreate', async(msg) => {
    if (msg.author.id == bot.user.id) return;
    if (msg.author.id != cfg.botID) return;
    if (msg.channel.id != cfg.channelID) return;

    msg.embeds.forEach(embed => {
        if (embed.title.includes('Guess The Number')) {
                setInterval(function() {
                    var randomNber = `${randomNumber(1, cfg.max)}`
                    
                    if (table.includes(randomNber)) {
                        console.log(`Duplicate Number: ${randomNber}`)
                    } else {
                    msg.channel.send(randomNber);
                    console.log(`Number Guess: ${randomNber}`)
                    table.push(randomNber)
                    }
                }, 1250)
        }
        if (embed.title.includes(`Congratulations, ${bot.user.username}!`)) {
            console.log('You Won!')
            process.exit();
        }
    })
})

bot.on('rateLimit', (info) => {
    console.log(info.timeout)
    console.log(info.limit)
})

bot.login(cfg.token)