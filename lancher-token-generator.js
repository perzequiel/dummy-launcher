const jwt = require('jsonwebtoken')

class LauncherTokenGenerator {
    operatorCode
    currencyCode
    langCode
    gameId
    userId
    powSeed
    operatorSeed
    launchToken

    constructor (api, operatorCode, powSeed, operatorSeed, currencyCode, langCode, gameId, userId) {
        this.api = api
        this.operatorCode = operatorCode
        this.powSeed = powSeed
        this.operatorSeed = operatorSeed
        this.currencyCode = currencyCode
        this.langCode = langCode
        this.gameId = gameId
        this.userId = userId
    }

    encode() {
        const firstLevelObject = {
            m: this.gameId,
            e: this.userId,
            t: (new Date()).toISOString(),
        }
        const firstLevelToken = jwt.sign(firstLevelObject, this.operatorSeed);
        const secondLevelObject = {
            r: this.operatorCode,
            c: this.currencyCode,
            l: this.langCode,
            n: firstLevelToken
        }
        const secondLevelToken = jwt.sign(secondLevelObject, this.powSeed);
        this.launchToken = secondLevelToken
    }

    getLaunchToken() {
        this.encode()
        return this.launchToken
    }

    getLaunchUrl() {
        return `${this.api}/launch/${this.getLaunchToken()}?call=0`
    }
}

module.exports = LauncherTokenGenerator