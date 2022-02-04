// criar função para perguntar com quantas cartas ira jogar
let nOfCards = null;  //num de cartas a ser escolhido pelo usuario
let card = document.querySelectorAll('.card');
// função para pedir num de cartas
function cardNum() {
    while (nOfCards % 2 !== 0 || nOfCards < 4 || nOfCards > 14) {
    nOfCards = prompt('Com quantas cartas quer jogar?');
    } 
    showCards();
    return(nOfCards);
}
cardNum();

function showCards() {
    for (let i = 0 ; i < nOfCards ; i++) {
        const elemento = card[i];
        elemento.classList.remove("hidden");
    }
}


