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
            gameId: this.gameId,
            userId: this.userId
        }
        const firstLevelToken = jwt.sign(firstLevelObject, this.operatorSeed);
        const secondLevelObject = {
            casinoId: this.operatorId,
            token: firstLevelToken
        }
        const secondLevelToken = jwt.sign(secondLevelObject, this.powSeed);
        this.launchToken = secondLevelToken
    }

    getLaunchToken() {
        return this.launchToken
    }
}

module.exports = LauncherTokenGenerator