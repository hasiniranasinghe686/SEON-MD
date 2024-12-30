const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'SEON-MD=bFFg0T4L#_9VrcemfD145Hs--A2Q3Y5hbL-wO5_xfBEhcikKqf90' : process.env.SESSION_ID,
GITHUB_USERNAME: process.env.GITHUB_USERNAME === undefined ? 'hasiniranasinghe686': process.env.GITHUB_USERNAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'Ll06XZOBEnViYj5phjHel8jRlxc5ln0rHFVw': process.env.GITHUB_AUTH_TOKEN
};
