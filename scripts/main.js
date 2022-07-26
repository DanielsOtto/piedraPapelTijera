const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const resultados = ["ganaste", "perdiste", "empataste"];
const opcionesPC = ["piedra", "papel", "tijera"];


const eleccionPC = ()=> {
    return Math.floor(Math.random()*opcionesPC.length);
}

const resultadosJuego = (opcionHumano)=> {

    let posAleatoria = eleccionPC();
    if(opcionHumano === opcionesPC[posAleatoria]){
        console.log("empataste"+" la pc eligio "+opcionesPC[posAleatoria]);
    }else{
        if(opcionesPC[posAleatoria] === 'papel'){
            if(opcionHumano === 'piedra'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria])
            }else{
                console.log("ganaste"+" la pc eligio "+opcionesPC[posAleatoria]);
            }
        }else if (opcionesPC[posAleatoria] === 'piedra'){
            if(opcionHumano === 'tijera'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria]);
            }else{
                console.log('ganaste'+" la pc eligio "+opcionesPC[posAleatoria]);
            }
        }else{
            if(opcionHumano === 'papel'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria]);
            }else {
                console.log('ganaste'+" la pc eligio "+opcionesPC[posAleatoria]);
            }
        }
    }
}

piedra.addEventListener('click', ()=> {
    resultadosJuego(piedra.value);
})

papel.addEventListener('click', ()=> {
    resultadosJuego(papel.value);
})

tijera.addEventListener('click', ()=> {
    resultadosJuego(tijera.value);
})

