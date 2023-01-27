// variables
let goombaNum = document.getElementById('goomba-number')
let goombaPrice = document.getElementById('goomba-price')
let bobombNum = document.getElementById('bobomb-number')
let bobombPrice = document.getElementById('bobomb-price')
let cheepNum = document.getElementById('cheepcheep-number')
let cheepPrice = document.getElementById('cheepcheep-price')
let totalPrice = document.getElementById('total-price')
let calc = document.getElementById('calc-total')

// calculator
function total(event) {
    
    event.preventDefault();

    let goombaTotal = goombaNum.value * 5;
    goombaPrice.value = goombaTotal;

    let bobombTotal = bobombNum.value * 7;
    bobombPrice.value = bobombTotal;

    let cheepTotal = cheepNum.value * 11;
    cheepPrice.value = cheepTotal;

    totalPrice.value = goombaTotal + bobombTotal + cheepTotal;
};

calc.addEventListener('click', total);