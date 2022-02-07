let nOfCards = null;  // num de cartas a ser escolhido pelo usuario
let cards = document.querySelectorAll('.card');
let array = [];
const deck = document.querySelector(".deck");
let count = 0;
let firstCard;
let firstCardBack;
let secondCard;
let lockBoard = false;
// função para pedir num de cartas
function cardNum() {
    while (nOfCards % 2 !== 0 || nOfCards < 4 || nOfCards > 14) {
    nOfCards = prompt('Com quantas cartas quer jogar?');
    } 
    showCards();
    return(nOfCards);
}
cardNum();

// função para mostrar numero de cartas pedido
function showCards() {
    for (let i=0 ; i<nOfCards ; i++) {
        const show = cards[i];
        array.push(show);
        show.classList.remove("hidden");
    }
array.sort(comparador);  
}

// funcao p embaralhar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}

// função p mandar a array embaralhada antes do conteudo carregar
function startGame() {
    for (let i= 0; i < array.length; i++){
    [].forEach.call(array, function(item){
        deck.appendChild(item);
    });
    }
}
window.onload = startGame();

//função para virar as cartas
function flipCard(element) {
    if(lockBoard) return false;
    count = count + 1;
    console.log(count);

    element.querySelector(".front-face").classList.remove("flip");
    element.querySelector(".back-face").classList.add("flip");   
        
    if (!document.querySelector(".firstCard")){
        element.classList.add("firstCard");
        firstCard = element;
        firstCard.setAttribute("onclick","");
        console.log(firstCard);
        return false;
    }
        element.classList.add("secondCard");
        secondCard = element;
        console.log(secondCard);
        lockBoard = true;
        setTimeout(checkForMach,1000);
        }
//função para checar se as cartas são iguais
function checkForMach(){
    if (firstCard.innerHTML !== secondCard.innerHTML) {
        firstCard.classList.remove("firstCard");
        firstCard.children[0].classList.add("flip");
        firstCard.children[1].classList.remove("flip");
        secondCard.classList.remove("secondCard");
        secondCard.children[0].classList.add("flip");
        secondCard.children[1].classList.remove("flip");
        firstCard.setAttribute("onclick","flipCard(this)");
    }
    else {
        firstCard.classList.remove("firstCard");
        firstCard.classList.add("match");
        firstCard.setAttribute("onclick","");
        secondCard.classList.remove('secondCard');
        secondCard.setAttribute("onclick","");
        secondCard.classList.add("match");
        endGame();
    }
    lockBoard = false;
}

function endGame() {
    if (document.querySelectorAll('.match').length == nOfCards) {
        alert("Você ganhou em " + count + " jogadas");
    }
}

