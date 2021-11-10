// > Module
let fs = require('fs-extra');

// > Json Files / [Database]
let setting = JSON.parse(fs.readFileSync('./setting.json'));

module.exports = msgHandler = async (master = new Client, message) => {
  try {
    let { id, from, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message;
    let { body } = message;
    let { name, formattedTitle } = chat;
    let { pushname, verifiedName, formattedName } = sender;
    pushname = pushname || verifiedName || formattedName;
    let cmd = caption || body || '';
    let command = cmd.toLowerCase().split(' ')[0] || '';
    let args = cmd.split(' ');
    if (setting.multiprefix == true) {
      var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~!#$%^&./\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓=|~!#$%^&./\\©^]/gi) : '-';
    } else {
      prefix = setting.prefix;
    }
    ownerNumber = [setting.ownernumber + "@s.whatsapp.net"]
  } catch (err) {
    console.error(color('[ERROR]', 'red'), err);
  }
}
