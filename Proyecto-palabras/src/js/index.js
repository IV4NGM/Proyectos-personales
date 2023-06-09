let words = []

function normalizeData(dataArray){
    for (let element of dataArray){
        const newWord = {
            word: element.word,
            meaning: element.meaning,
            spanish: element.spanish
        }
        words.push(newWord)
    }
    return words
}

let n

function getDataFromJSON(){
    fetch('../api/words.json')
    .then(response => response.json())
    .then(data => normalizeData(data))
    .then(jsondata =>{
        words = jsondata
        n = words.length
        randomWord(n)
    })
}

getDataFromJSON()

function randomWord(n){
    index = Math.floor(Math.random() * n)
    document.querySelector("#spanish").textContent = words[index].spanish
    document.querySelector("#meaning").textContent = words[index].meaning
    document.querySelector("#image").src = ""
    document.querySelector("#image").src = "https://source.unsplash.com/200x200/?" + words[index].word
    const verifyButton = document.createElement("button")
    verifyButton.textContent = "Verificar"
    verifyButton.classList.add("mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-button--colored")
    let input = document.querySelector("#guess")
    input.parentNode.insertBefore(verifyButton, input.nextSibling)
    verifyButton.addEventListener("click", function(){
        validar(words[index].word, verifyButton)
    })
}

function validar(word, button){
    let inputText = document.querySelector("#guess").value
    if (inputText == word){
        alert("Congratulations, you guessed!")
        document.querySelector("#guess").value = ""
        button.remove()
        randomWord(n)
    } else {
        alert("Ups, try again!")
    }
}