const { exec } = require('child_process');

process.on('message', (URL) => {
      console.log('CHILD got message:', URL);
      console.log('Open browser in CHILD URL:', URL);

      let command = `open -a "Google Chrome" ${URL}`;
      exec(command);
    });
    
process.send(`URL opend`);