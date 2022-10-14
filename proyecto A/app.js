var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var edad = document.getElementById('edad');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';


/* function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push ('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push ('Ingresa tu apellido');
    }
    if(edad.value === null || edad.value === ''){
        mensajesError.push ('Ingresa tu edad');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push ('Ingresa tu email');
    }
 
    error.innerHTML = mensajesError.join(',');
    

    return false; 
}*/
var form = document.getElementById('formulario');
form.addEventListener('submit', function (event){
    event.preventDefault();

    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Ingresa tu nombre');
    }
    if (apellido.value === null || apellido.value === '') {
        mensajesError.push('Ingresa tu apellido');
    }
    if (edad.value === null || edad.value === '') {
        mensajesError.push('Ingresa tu edad');
    }
    if (email.value === null || email.value === '') {
        mensajesError.push('Ingresa tu email');
    }

    error.innerHTML = mensajesError.join(',');

})



