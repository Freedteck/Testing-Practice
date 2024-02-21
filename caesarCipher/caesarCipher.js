function caesarCipher (str, shift) {
    let cipherText = ""

    for(let i = 0; i < str.length; i++) {

        if (/[a-zA-Z]/.test(str[i])) {

            const isUpperCase = str[i] === str[i].toUpperCase()
            const cipherCode = (str.charCodeAt(i) - (isUpperCase ? 65 : 97) + shift) % 26 + (isUpperCase ? 65 : 97)
            
            cipherText += String.fromCharCode(cipherCode).toUpperCase()
        } else {

            cipherText += str[i]
        }
    }

    return cipherText
}

export default caesarCipher