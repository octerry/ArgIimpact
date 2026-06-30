input1 = document.getElementById("input1")
input2 = document.getElementById("input2")

result1 = "&#x63;&#x68;&#x65;&#x65;&#x73;&#x65;"
result2 = "&#x6e;&#x61;&#x61;&#x6e;"

input2.addEventListener("input", ()=>{
    checkInput()
    console.log(this.value)
})

function decodeHTMLEntities(text) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}

function checkInput() {
    if (input1.value.toUpperCase() == decodeHTMLEntities(result1).toUpperCase()) {
        if (input2.value.toUpperCase() == decodeHTMLEntities(result2).toUpperCase()) {
            if (confirm("La page qui arrive pourrait causer des problèmes aux personnes épileptiques, êtes vous sûr de continuer ?")){
                document.location.href = document.location.origin + "/treasure/"
            }
        } else {
            if (input1.value.length >= 6 && input2.value.length >= 4) {
                alert("mauvais code décrypté (pas besoin de tester majuscule et minuscule ça marche dans tous les cas)")
            }
        }
    } else {
        if (input1.value.length >= 6 && input2.value.length >= 4) {
            alert("mauvais code décrypté (pas besoin de tester majuscule et minuscule ça marche dans tous les cas)")
        }
    }
}