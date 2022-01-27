const params = new URLSearchParams(window.location.search)

let day = params.get('day');
let month = params.get('month');
let eye = params.get('eye');
let hair = params.get('hair');
let name = params.get('name');
let fortune = '';
let happy = '';
let money = '';

let fortuneNum = 0;

if (day === 1) {
    fortuneNum += 3
} else if (day >= 2 && day <= 6) {
    fortuneNum++
} else if (day === 7) {
    fortuneNum += 3
} else if (day >= 8 && day <= 20) {
    fortuneNum++
} else if (day === 21) {
    fortuneNum += 3
} else if (day >= 22 && day <= 24) {
    fortuneNum++
} else if (day === 25) {
    fortuneNum += 3
} else if (day >= 26) {
    fortuneNum++
} else {
    fortuneNum++
    console.log('error with day')
}

if (month === 1) {
    fortuneNum += 2
} else if (month >= 2 && month <= 4) {
    fortuneNum++
} else if (month === 5) {
    fortuneNum += 2
} else if (month >= 6 && month <= 11) {
    fortuneNum++
} else if (month === 12) {
    fortuneNum += 2
} else {
    fortuneNum++
    console.log('error with month')
}

if (eye === 'brown') {
    fortuneNum++
} else if (eye === 'green') {
    fortuneNum += 4
} else if (eye === 'blue') {
    fortuneNum += 5
} else if (eye === 'amber') {
    fortuneNum += 3
} else if (eye === 'hazel') {
    fortuneNum += 2
} else {
    fortuneNum++
    console.log('error with eye color')
}

if (hair === 'brown') {
    fortuneNum += 2
} else if (hair === 'blonde') {
    fortuneNum += 4
} else if (hair === 'black') {
    fortuneNum++
} else if (hair === 'red') {
    fortuneNum += 3
} else {
    fortuneNum++
    console.log('error with eye color')
}

if (fortuneNum == 4) {
    fortune = 'A family member will jump'
    money = 10
    happy = 96
} else if (fortuneNum > 4 && fortuneNum <= 5) {
    fortune = "you will discover a special bond with your grandpas ex that will last for a lifetime"
    money = 90
    happy = 75
} else if (fortuneNum > 5 && fortuneNum <= 6) {
    fortune = 'An old man will change your life forever.'
    money = 100
    happy = 95
} else if (fortuneNum > 6 && fortuneNum <= 7) {
    fortune = 'Your whole family will get brutally murdered by a SWAT team because your drunk Uncle Bob was found with a creamy wet dildo.'
    money = 70
    happy = 15
} else if (fortuneNum > 8 && fortuneNum <= 9) {
    fortune = 'You will find your soulmate in the bathroom stall, (20 min 😉).'
    money = 45
    happy = 10
} else if (fortuneNum > 10 && fortuneNum <= 11) {
    fortune = 'You will inherit a 2 year old from your favorite Aunt.'
    money = 57
    happy = 90
} else if (fortuneNum > 12 && fortuneNum <= 13) {
    fortune = "Grandma gets stuck on stairs, but don't worry, step bro is always there"
    money = 89
    happy = 02
} else {
    console.log('error with final')
}

if (name == 'Andy') {
    fortune = "You will be rich and have a hot wife"
    money = 100
    happy = 100
}

console.log(fortuneNum)
document.getElementById('fortune').innerHTML = fortune
document.getElementById('happy').innerHTML = happy
document.getElementById('money').innerHTML = money