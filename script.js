let arrayContador = [0,0,0,0,0,0,0,0,0,0,0]//2,3,4,5,6,7,8,9,10,11,12

function rolaDados(quantidade = 1000){
    arrayContador = [0,0,0,0,0,0,0,0,0,0,0]
  for(let i = 0; i < quantidade; i++){
    let dado1 = Math.floor(Math.random() * 6)+1
    let dado2 = Math.floor(Math.random() * 6)+1

    let resultado = dado1 + dado2;

    arrayContador[resultado - 2]++;
  }
  insertOnHTML(arrayContador)
}

const numberText = document.querySelector('.number-text')
const numberList = document.querySelector('.number-list')

function insertOnHTML(array){
    numberText.innerHTML = ''
    numberList.innerHTML = ''
    for(let i = 0; i < array.length; i++){
        let numberTextList = document.createElement('li')
        numberTextList.className = 'number-text-list'

        let numberRepeated = document.createElement('p')
        numberRepeated.className = 'number-repeated'
        numberRepeated.innerText = `${i + 2} : `
        
        let timesRepeated = document.createElement('span')
        timesRepeated.className = 'times-repeated'
        timesRepeated.innerText = `${array[i]}`
        numberRepeated.appendChild(timesRepeated)

        numberTextList.appendChild(numberRepeated)
        numberText.appendChild(numberTextList)

        let listNumber = document.createElement('li')
        listNumber.className = 'list-number'

        let number = document.createElement('p')
        number.className = 'number-item'
        number.innerText = `${i + 2}`
        listNumber.appendChild(number)

        let frequency = document.createElement('span')
        frequency.className = 'frequency'
        if(i % 2 != 0){
            frequency.classList.add('odd')
        }
        frequency.style.height = `${fixChart(array[i])}px`
        listNumber.appendChild(frequency)

        numberList.appendChild(listNumber)
    }
}
function fixChart(number){
        if(quantidades < 1000){
            number = number * 2
        }
        if(quantidades > 2500 && quantidades <= 5000){
            number = number/2
        }
        if(quantidades > 5000 && quantidades <= 7500){
            number = number/3
        }
        if(quantidades > 7500 && quantidades <= 10000){
            number = number/4
        }
        if(quantidades > 10000 && quantidades <= 12500){
            number = number/5
        }
        if(quantidades > 12500 && quantidades <= 15000){
            number = number/6
        }
        if(quantidades > 15000 && quantidades <= 17500){
            number = number/7
        }
        if(quantidades > 17500 && quantidades <= 20000){
            number = number/8
        }
    return number
}

const form = document.querySelector('.roll-input')
const input = document.querySelector('.number')
let quantidades = 0

form.addEventListener('submit', function(e){
    e.preventDefault()
    let typedNumber = document.querySelector('input').value;
    typedNumber == '' ? typedNumber = 1000 : null
    quantidades = typedNumber
    rolaDados(typedNumber)
})

rolaDados()