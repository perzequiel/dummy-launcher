const jwt = require('jsonwebtoken')

class LauncherTokenGenerator {
    operatorCode
    currencyCode
    gameId
    userId
    powSeed
    operatorSeed
    launchToken

    constructor(operatorCode, currencyCode, gameId, userId ,powSeed , operatorSeed) {
        this.operatorCode = operatorCode
        this.currencyCode = currencyCode
        this.gameId = gameId
        this.userId = userId
        this.powSeed = powSeed
        this.operatorSeed = operatorSeed
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
            n: firstLevelToken
        }
        const secondLevelToken = jwt.sign(secondLevelObject, this.powSeed);
        this.launchToken = secondLevelToken
    }

    getLaunchToken() {
        return this.launchToken
    }
}

module.exports = LauncherTokenGenerator