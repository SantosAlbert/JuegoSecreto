let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let listaNumeroSorteados = [];

function asignarMensaje (elemento, texto){
    let parrafo = document.querySelector (elemento)
parrafo.innerHTML = texto
}
function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario===numeroSecreto){
        asignarMensaje('p', 'Acertaste el numero');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario>numeroSecreto){
            asignarMensaje('p', 'El numero secreto  es menor');
        }else{
            asignarMensaje('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        if (intentos == maximoDeIntentos ){
            asignarMensaje ('p', 'GAME OVER')
        }
    }
    return;

}
function limpiarCaja (){
    document.querySelector('#valorUsuario')
    limpiarCaja.value = '';
}
function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*10+1);
   //Si el numero generedo esta incluido en la lista

   if (listaNumeroSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto;
    console.log (listaNumeroSorteados);
    console.log (numeroGenerado);
   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
   console.log (listaNumerosSorteados);
   console.log (numeroGenerado);

asignarMensaje('p', 'Indica un numero del 1 al 10');
asignarMensaje('h1', 'Juego del numero secreto');