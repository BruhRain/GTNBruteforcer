const { Client } = require('discord.js-selfbot-v13');
const { createInterface } = require('readline');
const rl = createInterface(process.stdin, process.stdout);


const bot = new Client({
    checkUpdate: false,
});

let tkn = 'OTU3NDEyNzcyMTEzNjkwNjc0.G4DXvp.ML83hjA0a_97XpGdN4IHW423SI_p-UB4V37PuM'

const gtnID = '694278840855298079'
let channelID = '959892613819944984'

let max = 1000


rl.close();

bot.on('ready', async() => {
    console.log(`${bot.user.username}: started`);
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//setInterval(function() {
//    console.log(randomNumber(1,1000))
//}, 1240)

let table = []
bot.on('messageCreate', async(msg) => {
    if (msg.author.id == bot.user.id) return;
    if (msg.author.id != gtnID) return;
    if (msg.channel.id != channelID) return;

    msg.embeds.forEach(embed => {
        if (embed.title == '🎉 Guess The Number 🔢') {
                setInterval(function() {
                    var randomNber = `${randomNumber(1, max)}`
                    
                    if (table.includes(randomNber)) {
                        console.log(`Duplicate Number: ${randomNber}`)
                    } else {
                    msg.channel.send(randomNber);
                    console.log(`Number Guess: ${randomNber}`)
                    table.push(randomNber)
                    }
                }, 1250)
        }
        if (embed.title == `🎉 Congratulations, ${bot.user.username}!`) {
            console.log('You Won!')
            process.exit();
        }
    })
})

bot.on('rateLimit', (info) => {
    console.log(info.timeout)
    console.log(info.limit)
})


bot.login(tkn)