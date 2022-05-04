const express = require('express')

const app = express()
const port = 3000

const LauncherTokenGenerator = require('./lancher-token-generator.js')
const htmlIndex = require('./index.js')

require('dotenv').config()
const { POW_GAMING__OPERATOR_ID, POW_GAMING__OPERATOR_SEED, POW_GAMING__POW_SEED, POW_GAMING__PLATFORM_API } = process.env

app.get('/game/:gameId', (req, res) => {
    const gameId = req.params.gameId
    const userId = 'randomUser' // generated by the operator
    const operatorId = POW_GAMING__OPERATOR_ID
    const powSeed = POW_GAMING__POW_SEED
    const operatorSeed = POW_GAMING__OPERATOR_SEED
    const launcherTokenGenerator = new LauncherTokenGenerator(operatorId, gameId, userId ,powSeed , operatorSeed)
    launcherTokenGenerator.encode()
    res.redirect(`${POW_GAMING__PLATFORM_API}/launch/${launcherTokenGenerator.getLaunchToken()}`)
})

app.get('/', async (req, res) => {
    res.end(await htmlIndex());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})