
var carrito = 0
var button_comprar = document.getElementById ("button_comprar")
var numero = document.getElementById("contador")
var contador_numero = document.getElementById("contador-numero")

if (localStorage.getItem("carrito") != null){
    carrito = parseInt(localStorage.getItem("carrito"))
    contador_numero.innerHTML = carrito

}
console.log(carrito)

function agregar () {
    
    carrito= carrito + 1 
    contador_numero.innerHTML = carrito
    localStorage.setItem("carrito",carrito)

};
button_comprar.addEventListener("click",function(){
    agregar()
    
    console.log(carrito)
})


var validationForm = function (event) {
    'use strict'

    event.preventDefault()
    event.stopPropagation()
    var formulario = document.getElementById('formulario')
    var correo = document.getElementById('correo')
    var nombre = document.getElementById('nombre')
    var nombreValidacion = document.getElementById('nombre-invalido')
    var correoValidacion = document.getElementById('correo-invalido')

    if (formulario.checkValidity()) {
        correoValidacion.innerHTML = ''
        nombreValidacion.innerHTML = ''
        //aquí va el funcionamiento para mandar el correo
        console.log('email: ', correo.value)
        const url = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'
        axios.post(url, {'email': correo.value, 'name': nombre})
        .then(respuesta => {
            console.log('respuesta', respuesta)
        })
        .catch(err => {
            console.log('surgió un erro', err)
        } )
    }
    else {
        formulario.classList.add('invalid')
        console.log('formulario no valido')
        if (correo.value == "") {
            correoValidacion.innerHTML = 'Correo vacío'
        } else {
            correoValidacion.innerHTML = 'Correo inválido'
        }
        if (nombre.value == "") {
            nombreValidacion.innerHTML = 'Nombre vacío'
        }
     
    }
  }