function somar() {
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let res = document.getElementById('res')
    
    if (num1.value.length == 0 || num2.value.length == 0 ) {
        res.innerHTML='Por favor, preencha todos os espaços de números.'
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let r = n1 + n2 
        res.innerHTML=`<p>O resultado da soma é: <br> ${r}</p> `
    }
}
function subtrair() {
    let num1 = document.getElementById('n1')
    let num2 = document.getElementById('n2')
    let res = document.getElementById('res')
    
    if (num1.value.length == 0 || num2.value.length == 0 ) {
        res.innerHTML='Por favor, preencha todos os espaços de números.'
    } else {
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        let r = n1 + n2 
        res.innerHTML=`<p>O resultado da subtração é: <br> ${r}</p> `
}

}