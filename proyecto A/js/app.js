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
        mensajesError.push('Ingrese su nombre');
    }
    /*Validamos que inserte un texto y no numeros en nombre.*/
    let cadenaNombre = nombre.value.split("")
    for (let index = 0; index < cadenaNombre.length; index++) {
        if (parseInt(cadenaNombre[index])) {
            alert("El nombre no puede contener numeros.")
            return 0
        }
    }

    if (apellido.value === null || apellido.value === '') {
        mensajesError.push('Ingrese su apellido');
    }
    let cadenaApellido = apellido.value.split("")
    for (let index = 0; index < cadenaApellido.length; index++) {
        if (parseInt(cadenaApellido[index])) {
            alert("El apellido no puede contener numeros.")
            return 0
        }
    }
    if (edad.value === null || edad.value === '') {
        mensajesError.push('Ingrese su edad');
    }
    if (email.value === null || email.value === '') {
        mensajesError.push('Ingrese su email');
    }

    error.innerHTML = mensajesError.join(', ');

})



