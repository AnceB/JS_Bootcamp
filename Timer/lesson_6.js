let started = false
let hex = '0123456789ABCDEF'

function tick() {
    if (started) {
        let timeObject = document.getElementById('time')
        let time = timeObject.innerText;
        let timeSplit = time.split(':')

        let hh = parseInt(timeSplit[0])
        let mm = parseInt(timeSplit[1])
        let ss = parseInt(timeSplit[2])

        ss++;
        if (ss == 60) {
            mm++
            ss = 0
            if (mm === 60) {
                hh++
                mm = 0
            }
        }

        if (ss < 10) { ss = "0" + ss }
        if (mm < 10) { mm = "0" + mm }
        if (hh < 10) { hh = "0" + hh }

        timeObject.innerText = hh + ":" + mm + ":" + ss
        }
    }

function startStop() {
    let buttonObject = document.getElementById('start-stop-button')
    started = !started

    if (started) {
        buttonObject.innerText = 'Stop'
    } else {
        buttonObject.innerText = 'Start'
    }
}


function resetTimer() {
    let timeObject = document.getElementById('time')
    timeObject.innerText = "00:00:00"
}

function changeColor() {
    let timeObject = document.getElementById('time')
    let selectBox = document.getElementById('select-box')

    let color = selectBox.value

    if (color === 'random') {
        color = generateRandomColor()
    }
    
    timeObject.style.color = color
}

function generateRandomColor() {
    let randomColor = '#'
    let ri = null
    for (let i = 0; i < 6; i++) {
        ri = Math.floor(Math.random() * hex.length)
        randomColor += hex[ri]
    }
    return randomColor
}


// 'ABC' with key 1 becomes "BCD"

function caesarsCipher(text, key) {
    // key = key % 26
    // or
    key %= 26

    let encryptedText = ''
    let currentCharCode
    let newCharCode
    
    for (let i = 0; i < text.length; i++){
        currentCharCode = text.charCodeAt(i)
        newCharCode = currentCharCode + key
        encryptedText += String.fromCharCode(newCharCode)
        
    }
    return encryptedText
}

// 26 % 26 === 0
// 25 % 26 === 25
// 27 % 26 === 1
// 28 % 26 === 2

console.log(caesarsCipher('ABC', 1))

setInterval(tick, 1000)