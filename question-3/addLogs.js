const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, 'logs');

function addLogs() {
    if (!fs.existsSync(logDirectory)) {
        fs.mkdirSync(logDirectory);
        console.log(`Created log directory: ${logDirectory}`);
    }

    process.chdir(logDirectory);

    for (let i = 0; i < 10; i++) {         
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file number ${i}`);
        console.log(`Created log file: ${logFileName}`);
    }
}

addLogs();