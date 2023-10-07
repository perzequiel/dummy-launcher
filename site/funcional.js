let username = '';
let operatorcode = '';
window.onload = function () {
    recoverUser();
    setGames()
}

const recoverUser = ()=>{
    if (document.cookie) {
        usernameExist = false
        document.cookie.split(';').forEach(cookie => {
            const field = cookie.split('=')
            const name = field[0]
            const data = field[1]
            if (name == 'user') {
                username = data
                usernameExist = true
            }
            if (name == 'code') operatorcode = data
        });
        if (!usernameExist) {
            document.cookie = createUser() + ';' + document.cookie
        }
    } else {
        username = createUser();
    }
}
const setGames = async ()=>{
    for (const game of gamesList) {
        container = document.querySelectorAll(".games-container")
        if (container.length) {
            container[0].innerHTML = container[0].innerHTML + `<div class="game game__blackjack">
                <div class="game-logo">
                    <span>${game.name}</span>
                </div>
                <div class="btn-${game.class_name} game-bg">
                    <img src="${game.image}" alt="blackjaack-background">
                </div>
                <div class="btn btn-The21BlackJack" onclick="doAction('${game.game_id}')" >PLAY NOW!</div>
            </div>`
        }

        // gameBtn = document.querySelectorAll(".btn-" + game.class_name)
        // if (gameBtn.length) {
        //     gameBtn[0].addEventListener('click', ()=>{
        //         doAction(game.game_id)
        //     });
        //     gameBtn[1].addEventListener('click', ()=>{
        //         doAction(game.game_id)
        //     });
        // }
    }
}

const createUser = ()=>{
    let user = 'guest-' + new Date().getTime();

    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();

    return 'user=' + user + expires;
}

const doAction = (id)=>{
    window.location.href = `/game/${id}?username=${username}?operatorcode=${operatorcode}`
}