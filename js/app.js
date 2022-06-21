
const displayOutput = document.getElementById('display')

const zero = document.getElementById('zero')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')

const answer = document.getElementById('answer')



function main(){
    numberType(one)
    numberType(two)
    numberType(three)
    numberType(four)
    numberType(five)
    numberType(six)
    numberType(seven)
    numberType(eight)
    numberType(nine)
}
main()


function numberType(typeBtn){
    typeBtn.addEventListener('click', function(){
        displayOutput.innerText = this.value
    })
}
