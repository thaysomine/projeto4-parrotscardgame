// criar função para perguntar com quantas cartas ira jogar
let nOfCards = null;  //num de cartas a ser escolhido pelo usuario
const cards = document.querySelectorAll('.card');
let array = [];
const deck = document.querySelector(".deck");
// função para pedir num de cartas
function cardNum() {
    while (nOfCards % 2 !== 0 || nOfCards < 4 || nOfCards > 14) {
    nOfCards = prompt('Com quantas cartas quer jogar?');
    } 
    showCards();
    return(nOfCards);
}
cardNum();
//função para mostrar numero de cartas pedido
function showCards() {
    for (let i=0 ; i<nOfCards ; i++) {
        const show = cards[i];
        array.push(show);
        show.classList.remove("hidden");
        show.classList.add("flip");
    }
array.sort(comparador);  
}
//funcao p embaralhar 


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}


//função para virar as cartas
//cards.forEach(card)
function startGame() {
    for (let i= 0; i < array.length; i++){
    [].forEach.call(array, function(item){
        deck.appendChild(item);
    });
    }
}

window.onload = startGame();
