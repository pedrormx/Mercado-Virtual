let totalMelancia = 0
let totalAbacate = 0
let melancia = 4
let abacate = 3

function add1melancia(){
    document.getElementById('valorMelancia').innerHTML = `${totalMelancia+=1} `
}
function sub1melancia(){
    document.getElementById('valorMelancia').innerHTML = `${totalMelancia-=1} `

}
function add1abacate(){
    document.getElementById('valorAbacate').innerHTML = `${totalAbacate+=1} `
}
function sub1abacate(){
    document.getElementById('valorAbacate').innerHTML = `${totalAbacate-=1} `

}


function mostraTotal(){
    let valorTotalMelancia = melancia * totalMelancia
    let valorTotalAbacate = abacate * totalAbacate
    let valorTotal = valorTotalAbacate + valorTotalMelancia
    document.getElementById('totalCompra').innerHTML = `
    Total deu: R$${valorTotal}.00 <br>
    Melancia : R$${valorTotalMelancia}<br>
    Abacate : R$${valorTotalAbacate}
    ` 
}

let btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function(){
    window.location.href = 'register.html'
})
