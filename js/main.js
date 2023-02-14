let pagina = document.getElementById('pagina');
let fotoCv = document.getElementById('foto-cv');
let nombreCompleto = document.getElementById('nombrecompleto');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let fechaDeNacimiento = document.getElementById("fecha-de-nacimiento");
let telefonoFijo = document.getElementById("telefono-fijo");
let telefonoMovil = document.getElementById("telefono-movil");
let direccion = document.getElementById("direccion");
let localidad = document.getElementById("localidad");
let codigoPostal = document.getElementById("codigo-postal");
let email = document.getElementById("email");
let nacionalidad = document.getElementById('nacionalidad');

let botonContactame = document.getElementById('boton-contactame')
let formContactame = document.getElementById('contacto-usuario')

const url =' https://randomuser.me/api/?nat=ES ';

fetch(url)
    .then(url => url.json())
    .then(updateProfile)

function updateProfile (data){
  pagina.innerText = data.results[0].name.first +" "+ data.results[0].name.last;
  fotoCv.src = data.results[0].picture.large;
  nombreCompleto.innerHTML = data.results[0].name.first +" "+data.results[0].name.last; 
  nombre.innerText = "Nombre: "+data.results[0].name.first;
  apellido.innerText = "Apellido: "+data.results[0].name.last;
  edad.innerText = "Edad: "+ data.results[0].dob.age;
  fechaDeNacimiento.innerText = "Fecha de nacimiento: "+data.results[0].dob.date;
  telefonoFijo.innerText = "Telefono fijo: "+data.results[0].phone;
  telefonoMovil.innerText = "Telefono movil: "+data.results[0].cell;
  direccion.innerText = "Direccion: "+data.results[0].location.street.name+" "+data.results[0].location.street.number;
  localidad.innerText = "Localidad: "+data.results[0].location.city+", "+data.results[0].location.state;
  codigoPostal.innerText = "Codigo postal: "+data.results[0].location.postcode;
  email.innerText = "E-mail: "+data.results[0].email,
  nacionalidad.innerText = "Nacionalidad: "+data.results[0].location.country;
}

botonContactame.addEventListener("click",function(){
  mostrarOcultar(formContactame)
});

function mostrarOcultar (elemento){
  if(tieneClass("oculto", elemento)){
    elemento.classList.remove('oculto');
        botonContactame.innerText = "ocultar"

  }else{
    elemento.classList.add('oculto');
    botonContactame.innerText = "Contactame!"
  }
}
function tieneClass (clase, elemento ){
  return elemento.classList.contains(clase)
  
}

