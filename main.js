module.exports = msgHandler = async (master = new Client, message) => {
  try {
    let { id, from, sender, isGroupMsg, chat, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, mentionedJidList } = message;
    let { body } = message;
    let { name, formattedTitle } = chat;
  } catch (err) {
    console.error(color('[ERROR]', 'red'), err);
  }
}
