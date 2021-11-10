/**
 * Get command mesaage
 * @param {string} message
 * @returns {Number}
 * @returns {Number}
 */
const msgs = (message) => {
  if (command.startsWith(prefix)) {
    if (message.length >= 10) {
      return `${message.substr(0, 15)}`;
    } else {
      return `${message}`;
    }
  }
}

module.exports = { msgs }
