const resultados = ["ganaste", "perdiste", "empataste"];
const opcionesPC = ["piedra", "papel", "tijera"];
const claro = document.getElementById("claro");
const oscuro = document.getElementById("oscuro");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const modalBox = document.getElementById("modal");
const box = document.getElementById("boxGame");
const body = document.getElementById("body");
const h1 = document.getElementById("tit-1");

const removerClases = (claseB, claseC)=> {

    piedra.classList.remove(claseB);
    papel.classList.remove(claseB);
    tijera.classList.remove(claseB);
    oscuro.classList.remove(claseB);
    claro.classList.remove(claseB);
    box.classList.remove(claseC);
}

const agregarClases = (claseB, claseC)=> {

    piedra.classList.add(claseB);
    papel.classList.add(claseB);
    tijera.classList.add(claseB);
    oscuro.classList.add(claseB);
    claro.classList.add(claseB);
    box.classList.add(claseC);
}

const agregarTxtBlanco = (color)=> {

    h1.classList.add(color);
    piedra.classList.add(color);
    papel.classList.add(color);
    tijera.classList.add(color);
    claro.classList.add(color);
}

const quitarTxtBlanco = (color)=> {

    h1.classList.remove(color);
    piedra.classList.remove(color);
    papel.classList.remove(color);
    tijera.classList.remove(color);
    claro.classList.remove(color);
}

claro.addEventListener('click', (e)=> {
    e.preventDefault();
    claro.classList.add("deshabilitado");
    oscuro.classList.remove("deshabilitado");
    quitarTxtBlanco("txt--white")
    body.classList.remove("body--dark");
    agregarClases("btn--ligth", "opcionesJuego--ligth");
    removerClases("btn--dark", "opcionesJuego--dark");
    // claroclassList.remove("btn--dark");  desabilitado clase
})

oscuro.addEventListener('click', (e)=> {
    e.preventDefault();
    oscuro.classList.add("deshabilitado");
    claro.classList.remove("deshabilitado");
    agregarTxtBlanco("txt--white");
    body.classList.add("body--dark");
    agregarClases("btn--dark", "opcionesJuego--dark");
    removerClases("btn--ligth", "opcionesJuego--ligth");
})

const eleccionPC = ()=> {
    return Math.floor(Math.random()*opcionesPC.length);
}
const colorResultado = (resultado, p)=> {

    resultado === resultados[0] && p.classList.add("win");
    resultado === resultados[1] && p.classList.add("lose");
    resultado === resultados[2] && p.classList.add("tie");
}
const crearModal = (resultado, opcPc, tuOpc)=> {
    modalBox.classList.add("modal--show");
    // body.className = "bodyWOpen";
    modalBox.innerHTML = null;

    const div = document.createElement('div');
    div.className = "modal__container";
    div.innerHTML = `<header class="modal__header">
                        <p id="title" class="modal__title"><strong>${resultado}</strong></p>
                        <a href="#" class="modal__close" id="btnClose"> X </a>
                    </header>
                    <section class="modal__text"><p>Elegiste <span class="mayuscula user">${tuOpc}</span>, y la pc eligió <span class="mayuscula pc">${opcPc}</span>.</p></section>`;
    modalBox.appendChild(div);
    const p = document.getElementById("title");
    colorResultado(resultado, p);    

    const btnClose = document.getElementById("btnClose");

    btnClose.addEventListener('click', ()=> {

        modalBox.classList.remove("modal--show");
    })
}
const resultadosJuego = (opcionHumano)=> {

    let posAleatoria = eleccionPC();
    if(opcionHumano === opcionesPC[posAleatoria]){
        console.log("empataste"+" la pc eligio "+opcionesPC[posAleatoria]);
        crearModal(resultados[2], opcionesPC[posAleatoria], opcionHumano);
    }else{
        if(opcionesPC[posAleatoria] === 'papel'){
            if(opcionHumano === 'piedra'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[1], opcionesPC[posAleatoria], opcionHumano);
            }else{
                console.log("ganaste"+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[0], opcionesPC[posAleatoria], opcionHumano);
            }
        }else if (opcionesPC[posAleatoria] === 'piedra'){
            if(opcionHumano === 'tijera'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[1], opcionesPC[posAleatoria], opcionHumano);
            }else{
                console.log('ganaste'+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[0], opcionesPC[posAleatoria], opcionHumano);
            }
        }else{
            if(opcionHumano === 'papel'){
                console.log('perdiste'+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[1], opcionesPC[posAleatoria], opcionHumano);
            }else {
                console.log('ganaste'+" la pc eligio "+opcionesPC[posAleatoria]);
                crearModal(resultados[0], opcionesPC[posAleatoria], opcionHumano);
            }
        }
    }
}
piedra.addEventListener('click', (e)=> {
    e.preventDefault();
    resultadosJuego(piedra.value);
})
papel.addEventListener('click', (e)=> {
    e.preventDefault();
    resultadosJuego(papel.value);
})
tijera.addEventListener('click', (e)=> {
    e.preventDefault();
    resultadosJuego(tijera.value);
})
