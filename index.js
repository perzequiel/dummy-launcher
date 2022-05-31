var fs = require('fs').promises;
var request = require('request');
const requestPromise = require('util').promisify(request);

require('dotenv').config()
const { POW_GAMING__GAME_LIST } = process.env

const htmlIndex = async (username) => {
    let games = ''
    const contents = await fs.readFile(__dirname + '/index.html')
    const { body } = await requestPromise(POW_GAMING__GAME_LIST)
    JSON.parse(body).forEach(element => {
        games += `<div><a href='game/${element.id}?username=${username}'>${element.name}</a></div>`
    });
    return `${contents}${games}</div></body></html>`    
}

module.exports = htmlIndex