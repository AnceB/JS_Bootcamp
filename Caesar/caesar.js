function caesarsCipher(text, key) {
    // key = key % 26
    // or
    
    let text = document.getElementById('msg-input').value
    let key = document.getElementById('key-input').value

    key %= 26

    let encryptedText = ''
    let currentCharCode = null
    let newCharCode = null
    
    for (let i = 0; i < text.length; i++){
        currentCharCode = text.charCodeAt(i)
        newCharCode = currentCharCode + key

        if (currentCharCode >= 65 && currentCharCode <= 90) {
            if (newCharCode > 90) {
                newCharCode -= 26
            } else if (newCharCode < 65) {
                newCharCode += 26
            }
        } else if (currentCharCode >= 97 && currentCharCode <= 122) {
            if (newCharCode > 122) {
                newCharCode -= 26
            } else if (newCharCode < 97){
                newCharCode += 26
            }
        }
        let newChar = String.fromCharCode(newCharCode)
        encryptedText += newChar
    }
   let resultContainer = document.getElementById('result-container')
   resultContainer.innerText = encryptedText
}


// 26 % 26 === 0
// 25 % 26 === 25
// 27 % 26 === 1
// 28 % 26 === 2