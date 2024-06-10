//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                 //
//                                             W H A T S A P P _ U S E R _ BOT                                     //
//                                                                                                                 //                                               //
//                                                                                                                 //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░      //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░      //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░      // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░      //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░      //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░      //
//                                                                                                                 //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                       //  
//                                                                                                                 //
//                                                                                                                 //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdIdEFVZ1BoZVdOUWFnYWdtaW9Md2FKZGRQdDN5NDllcE1xeldvUTcycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclZzR28xUEZSWmt6ZnZMblo0YUp4dDZGU29oeWM0cFRyVmdJQmJQSlUydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q0NRbENhMnpuUkpaQ3VhS2QwMVY2eW5xamsvWVlpaDNBNmJDMW9ZUlc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0WWRJK2VxZ2JXTkdTZTVRZmRPOFU1bzA4RnMvOWtVVTVSc2V2cnpCMDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBUThya2g4UTc1RUc5N1FZdDNYSERZd0NycUR3L0RZTC8vUVNSeUFEbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9udzFJZFBlOThxYXBRaGJqTlRYdEVKZUoyTllCMXFsd0YwaURWa0hmQ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZPRDhqeXBGV0RuQ1V0eTRyVnBJcllQNUdkQWhQdXNHVzJ2VWRhMG4xND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVk2YkxKb1NFcDk5cUIzMWhPLzRVcFZUL1dkUmQwOVY0Yzk4ZDgwUWR6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJY3JlenI3Y2J5MFh0OC9MUndReEpDQTJ3dHZGMXdnNm1odVoyU2NndVN4ZlZuNncraGlDU0ZJOGtqSndRVmZySHVIc0VqSWIrUGZBVzIrMUpwY0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6InNKUEgrMlQ0aGdsN2p6NC9HbDhLYnppRXZMY0lhc2hrb2gvSktobVB4a3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImpUd0lSenNCUXZ5bGJnSVlTTkVNRGciLCJwaG9uZUlkIjoiNjIyNWJhYTctOTRjOC00NDc0LWJhZmItMDY3MGE2MmJlMTA3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpPZnNIbGdIWXZrYmdmT1M2UFNPYkUySC9qQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaYk5RdmdnbnFLa0wxOVJIb0RsVnMzd3M1Mk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUzZWRlZOWTMiLCJtZSI6eyJpZCI6Ijk0NzAyOTM2Mzc1OjMzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKIgs6x0Y/QuiBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbtGC0ZTCotC9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcTU3S3NIRUtTeW1yTUdHQ2dnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFb1RPUEE1dFhyMDZ4WVVlb1FOK1lxZm40ZmQvSldEQmJGeThjWGYrZ3pJPSIsImFjY291bnRTaWduYXR1cmUiOiJIL0c1ZTZzYlRYQTZiZGFNOEhPcjVTbUFHbkF4cDFmOXZtMHNJMndoWDVIeHJESmxkbzZDUHZ1bjh0cFp1UmlMMDgxOVdDWk5hdVdTcCtrWXd6Z3REUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVlHejNlNGJRcEd5U05zSmVjRURjVG1vUFNwQm0rNlBlNU96d0dhVWo0QmMyU3c1V2FkM1dRcTR3bDYyTjhkZnk3S2JCaUJYWXQrOGFOVDh4clpGQXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMjkzNjM3NTozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSS0V6andPYlY2OU9zV0ZIcUVEZm1LbjUrSDNmeVZnd1d4Y3ZIRjMvb015In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3OTk5OTIxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhiTyJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "NIKO TECH",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "94704020146",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'MASTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || 'sk-proj-YfcNzdUKxlPr4yOkKYRQT3BlbkFJB0dbLsM9gWNTh52M3hAw',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/10606249be88997c07cc6.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
