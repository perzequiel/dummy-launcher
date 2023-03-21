let username = '';
window.onload = function () {
    recoverUser();
    setGames()
}

const recoverUser = ()=>{
    if (document.cookie) {
        username = document.cookie.split(';')[0].split('=')[1];
    } else {
        username = createUser();
    }
}
const setGames = async ()=>{
    for (const game of gamesList) {
        gameBtn = document.querySelectorAll(".btn-" + game.class_name)
        container = document.querySelectorAll(".games-container")

        if (container.length) {
            container[0].innerHTML = container[0].innerHTML + `<div class="game game__blackjack">
                <div class="game-logo">
                    <span>${game.name}</span>
                </div>
                <div class="btn-${game.class_name} game-bg">
                    <img src="${game.image}" alt="blackjaack-background">
                </div>
                <div class="btn btn-The21BlackJack" >PLAY NOW!</div>
            </div>`
        }

        if (gameBtn.length) {
            gameBtn[0].addEventListener('click', ()=>{
                doAction(game.game_id)
            });
            gameBtn[1].addEventListener('click', ()=>{
                doAction(game.game_id)
            });
        }
    }
}

const createUser = ()=>{
    let user = 'guest-' + new Date().getTime();

    let date = new Date();
    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();

    document.cookie = 'user=' + user + expires;
    return user;
}

const doAction = (id)=>{
    window.location.href = `/game/${id}?username=${username}`
}