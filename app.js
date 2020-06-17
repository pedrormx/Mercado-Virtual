let totalMelancia = 0
let totalAbacate = 0
let melancia = 4
let abacate = 3

function add1melancia(){
    document.getElementById('valormelancia').innerHTML = `${totalMelancia+=1} `
}
function sub1melancia(){
    document.getElementById('valormelancia').innerHTML = `${totalMelancia-=1} `

}
function add1abacate(){
    document.getElementById('valorabacate').innerHTML = `${totalAbacate+=1} `
}
function sub1abacate(){
    document.getElementById('valorabacate').innerHTML = `${totalAbacate-=1} `

}

function exitIndex(){
    window.location.href = 'login.html'
}

function mostraTotal(){
    let valorTotalMelancia = melancia * totalMelancia
    let valorTotalAbacate = abacate * totalAbacate
     let valorTotal = valorTotalAbacate + valorTotalMelancia
    console.log(valorTotal)    
    document.getElementById('msg').innerHTML =`
    Total: R$${valorTotal}.00 <br>
    Melancia: R$${valorTotalMelancia}.00<br>
    Abacate: R$${valorTotalAbacate}.00
    `


}

let btn2 = document.getElementsByClassName('btn2')
btn2.addEventListener('click', function(){
    window.location.href = 'register.html'
})
