// const animal = 'fox'
// const fish1 = 'snake'
// const fish2 = 'jelly'
// const fish3 = 'shark'

// const fish = document.querySelectorAll('.fish')
// const animal1 = document.getElementById('fox')

// animal1.textContent = animal

// fish[0].textContent = fish1
// fish[1].textContent = fish2
// fish[2].textContent = fish3

const body = document.querySelector('body')
const unordered = document.createElement('ul')
const list = document.createElement('li')

body.append(unordered)
unordered.append(list)

unordered.setAttribute('class', 'food drink')
const myName = 'chidinma Barbie Nwaneti'
const x = 'the quick brown fox jumps over the lazy dog'

// list.textContent = `my name is ${myName}, and it has ${myName.length} characters. my name contains a country
// named ${myName.slice(9,15)} I can replace all a with l ${myName.replaceAll('a', 'o')} does my name start with c, ${myName.startsWith('c')}. the last character of my name is ${myName[myName.length-1]}`

list.textContent = x[x.indexOf('h')] + x[x.indexOf('e')] + x[x.indexOf('l')] + x[x.indexOf('l')] + x[x.indexOf('o')] +
    x[x.indexOf(' ')] + x[x.indexOf('u')] + x[x.indexOf('n')] + x[x.indexOf('i')] + x[x.indexOf('v')] +
    x[x.indexOf('e')] + x[x.indexOf('l')]

list.textContent = x.split(' ')

const food = document.getElementsByClassName('food')
const drink = document.getElementsByClassName('drink')

food[0].style.background = 'green'
food[0].style.padding = '10px'
food[0].style.textTransform = 'uppercase'
food[0].style.fontSize = '2em'

drink[0].style.color = 'pink'