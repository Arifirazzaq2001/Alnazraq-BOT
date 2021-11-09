let { create, Client } = require('@open-wa/wa-automate');
let msgHandler = require('./main.js');
let fs = require('fs');

function startBot(conn = new Client) {
  conn.onMessage((async (message) => {
    msgHandler(conn, message);
  }));
}

create(options(true, startBot))
.then(conn => startBot(conn))
.catch((error) => console.log(error));
