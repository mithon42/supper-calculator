/**
 * Author: Mithon Islam
 * Dec: Awesome Mini Powerful Calculator.
 * Date: 01-07-2022
 * Day: Friday
*/

const sounds = new Audio('../Sounds/click-sounds.mp3');
sounds.volume = 0.4;

let result = document.getElementById('result')


function numShow(number){
    result.value += number;
    sounds.play()
}

function clearAll(){
    result.value = '';
    sounds.play()
}

function del(){
    result.value = result.value.slice(0, -1);
    sounds.play()
}

function calculate(){
    let x = result.value;
    let y = eval(x);

    sounds.play()
    result.value = y;
}
