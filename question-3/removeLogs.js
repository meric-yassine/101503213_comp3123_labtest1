const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, 'logs');

function removeLogs() {
    if (fs.existsSync(logDirectory)) {
        fs.readdirSync(logDirectory).forEach(file => {
            const filePath = path.join(logDirectory, file);
            fs.unlinkSync(filePath);
            console.log(`Deleted log file: ${filePath}`);
});
        fs.rmdirSync(logDirectory);
        console.log(`Deleted log directory: ${logDirectory}`);
    }else{
        console.log(`Log directory does not exist: ${logDirectory}`);
    }
}

removeLogs();