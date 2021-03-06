let { create, Client } = require('@open-wa/wa-automate');
let msgHandler = require('./main.js');
let fs = require('fs');

function options() {
  const options = {
    sessionId: "session",
    authTimeout: 60,
    blockCrashLogs: true,
    disableSpins: true,
    headless: true,
    hostNotificationLang: 'PT_BR',
    logConsole: false,
    popup: true,
    qrTimeout: 0,
    useChrome: true,
  }
  return options
}

function startBot(conn = new Client) {
  conn.onMessage((async (message) => {
    msgHandler(conn, message);
  }));
}

create(options(true, startBot))
.then(conn => startBot(conn))
.catch((error) => console.log(error));
