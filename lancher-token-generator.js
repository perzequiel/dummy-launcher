const jwt = require('jsonwebtoken')

class LauncherTokenGenerator {
    operatorId
    gameId
    userId
    powSeed
    operatorSeed
    launchToken

    constructor(operatorId, gameId, userId ,powSeed , operatorSeed) {
        this.operatorId = operatorId
        this.gameId = gameId
        this.userId = userId
        this.powSeed = powSeed
        this.operatorSeed = operatorSeed
    }

    encode() {
        const firstLevelObject = {
            m: this.gameId,
            e: this.userId,
            t: new Date(),
        }
        const firstLevelToken = jwt.sign(firstLevelObject, this.operatorSeed);
        const secondLevelObject = {
            r: this.operatorId,
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