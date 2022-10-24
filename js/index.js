const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let sinal = document.getElementById('sinal');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    NumberDawn: function randomValue() {
        return Math.round(Math.random()*this.max);
    }
};
let NumberDawn=Guess.NumberDawn();
function updateAttempt(attempt, value){
    attempt.innerHTML= 'tentativa:' + value 
};

function handleSubmit(e) {
    e.preventDefault();
    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite algum valor')
        return;
    };
    updateAttempt(attempt, ++Guess.attemptsNumber);
    if(NumberDawn==kick){        /* condicional -> acertou */
        playAgain();
        sinal.innerHTML= 'Voce acertou, Parabens!';
        result.style.backgroundColor = '#37c978'
        result.style.transition ='0.4s';
        result.style.color = '#fff';
        sinal.style.color = '#fff';
        clear();
    }else if(kick > NumberDawn ){             /* condicional -> maior que o kick */
        sinal.innerHTML = 'o numero é maior';
        sinal.style.color = '#De4251';
        clear();
    }else if(kick < NumberDawn){                              /* condicional menor que o kick */
        sinal.innerHTML= 'o numero é menor';
        sinal.style.color='#De4251';
        clear();
    }                         
}

function playAgain(){
    document.getElementById('btn-Restart').style.display = 'flex';
};
function restart(){
    document.location.reload(true);
};
function clear(){
    document.getElementById('kick').value = '';
}