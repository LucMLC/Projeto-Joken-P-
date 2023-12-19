// Mapeamento 
AOS.init();
const user = document.querySelector('.user')
const login = document.querySelector('.login')
const nameUser = document.getElementById('name-user')
const input = document.querySelector('input')
const container = document.querySelector('.container')
const resultGame = document.querySelector('.result-game')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let player = document.getElementById('player')
let computerIa = document.getElementById('computer')



//Tela login
const closeLoginScreen = () => {

    if (input.value == "") {
        alert("É preciso digitar o nome de usuário")
    } else {
        user.style.opacity = 0;
        user.style.zIndex = -2;
        container.style.opacity = 1;

    }
}

const showUserName = () => {
    const name = "Olá jogador : " + input.value;
    nameUser.innerHTML = name;
    nameUser.style.color = '#96DB50';
   
}

//------------------------------//


let playerPoints = 0;
let computerPoints = 0;

const optionHuman = (valueHuman) => {

    toResultGame(valueHuman, optionComputer());
}

//    Função responsavel por guardar as opções disponiveis dentro de um objeto, 
//    para quando retornar a posição do objeto, o match.random entrar em ação 
//    gerando um número aleatório até "3". Então entra o math.floor para sempre 
//    arredondar o resultado para um numero abaixo.
const optionComputer = () => {
    const selections = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    return selections[randomNumber];
}

const toResultGame = (human, computer) => {
    console.log("Humano: " + human + "I.A: " + computer)

    if (human === computer) {
        resultGame.innerHTML = "&#x274C; Deu Empate";

    } else if (human === 'paper' && computer === 'rock' ||
        human === 'rock' && computer === 'scissors' ||
        human === 'scissors' && computer === 'paper') {
        resultGame.innerHTML = "&#x2705; Você Venceu!"
        playerPoints += 1;
        player.innerHTML = playerPoints;
        player.style.color = '#96DB50';

    } else {
        resultGame.innerHTML = "&#x274C; Você Perdeu!"
        computerPoints += 1;
        computerIa.innerHTML = computerPoints;
        computerIa.style.color = '#E4464C';


    }
}

login.addEventListener("click", closeLoginScreen)
input.addEventListener("change", showUserName)




