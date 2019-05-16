const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//CHANNEL ID 
client.login('NTc3NDIzMzU4MzI5NzQ5NTA1.XNk13A.E0t1Z_wLSc7VgzGACFIFXeA_EO4')

// const {
// 	prefix,
// 	token,
// } = require('./config.json');

// DR PHIL QUOTES
client.on('message', msg => {
  if (msg.content === '!phil_me_up') {
    msg.reply(random())
  }
  if (msg.content === '!all_commands') { 

    msg.reply(" All listed commands: \n !phil_me_up: Dr Phil spits out some real facts \n !join_the_ranch: Dr Phil joins the voice channel \n !leave_ranch: Dr Phil leaves the voice channel \n !sicko_mode: Dr Phil joins voice chat and goes sicko mode \n !cursed_phil: Dr Phil shows you a cursed image of him ")
  }
})

// function to generate a random quote 
function random() { 
    num = Math.floor(Math.random() * 25)
    return quotes[num]; 
}

// Array of Dr Phil Quotes 
quotes = ["Don’t make me put your head in a blender!",
            "This ain’t my first rodeo son!", 
            "No matter how flat you make a pancake- its got two sides!", 
            "No dog ever peed on a moving car.", 
            "Sometimes you gotta rise above your raising.", 
            "I ain’t some Hassidic hillbilly with a snoot full of honey bees.", 
            "You need to marry yo' baby mamma", 
            "How 'bout when this is over we go do a little 'coke'?", 
            "You're a bitch!", 
            "I want you to start living as a gay woman!", 
            "You're Ugly, You're Disgusting, I'm Gonna Kill You, Give Me $200", 
            "There are some sick people in this world.", 
            "A year from now, you're gonna weigh more or less than what you do right now.", 
            "You don't need a rope to pinch a stranger's butt.", 
            "You don't need a pack of wild horses to learn how to make a sandwich.", 
            "I just am not good at math", 
            "It's hard to see your own face without a mirror.", 
            "I mean, I'm very, very competitive.", 
            "I'm not a politician.", 
            "Nothing's funnier to me than laughing at myself.", 
            "You can't put feathers on a dog and call it a chicken!", 
            "A lot of people do have tragic childhoods. But you know what? Get over it.", 
            "Learn when's a good time to shut up",
            "Take the high road, there's a lot less traffic up there.", 
            "Common sense needs to be more common."
] 

// GETTING PHIL_BOT TO REACT TO A MESSAGE 
client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
      return
  }
  const messagePhil = "bruh"; 
  const messageWhy = "why"; 
  const messageN = "nathan"; 
  const messageO = "ollie"
  //Everytime someone says Phil 
  var mes = receivedMessage.content.toLowerCase();
    if (mes.includes(messagePhil)) { 
       receivedMessage.react("👉").then(receivedMessage.react("👌"))
      // Everytime someone says why 
    } else if (mes.includes(messageWhy)) { 
       receivedMessage.react("🅱");
      // Everytime someone says nathan 
    } else if (mes.includes(messageN)) { 
      receivedMessage.react(client.emojis.get("523818737917493248"));
      // Everytime someone says ollie 
    } else if (mes.includes(messageO)) { 
      receivedMessage.react(client.emojis.get("464281876069351426"));
    }
}) 


// GETTING PHIL BOT TO HOP IN CHAT AND SAY VOICE COMMANDS 
client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '!join_the_ranch') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the ranch!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if(message.content === '!leave_ranch') {

    message.member.voiceChannel.leave()
    message.reply('Back to the Dr Phil Show!'); }

  if(message.content === '!sicko_mode') { 

      message.member.voiceChannel.join().then(connection => {
        //This makes it go green 
        //const ytdl = require('ytdl-core');
        //connection.playOpusStream(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8',{ filter: 'audioonly' }));
  
        //const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
        //const dispatcher = connection.playStream(stream);
        const dispatcher = connection.playFile('C:/Users/Sasha/Documents/Code/dR_phil_bot/phil_1.mp3');
        })
    } 
})

// GETTING PHIL BOT TO POST AN IMAGE 
client.on('message', message => {
  if (message.content === "!cursed_phil") {

  //Provide a path to a local file
  //const localFileAttachment = new Discord.Attachment('D:\\logo.png')
  //generalChannel.send(localFileAttachment)

  //Providing an image with an URL
    message.channel.send("Message received from " + message.author.toString() + ": " + message.content)
    message.channel.send("give me some strontium", {files: ["https://i.redd.it/r9q9bpiichu21.jpg"]});
  }

  
})


// CHECKING IF PHIL IS TAGGED IN A MESSAGE 
client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

    // Check if the bot's user was tagged in the message
    if (receivedMessage.content.includes(client.user.toString())) {
        // Send acknowledgement message
        receivedMessage.channel.send("Leave me alone " +
            receivedMessage.author.toString() + ": " + receivedMessage.content)
    }
})




