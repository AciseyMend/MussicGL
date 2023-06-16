console.log("funcion")
console.log(document)
console.log(document.body)
console.log(document.getElementsByClassName("title"))
const guardarConfiguracion = document.getElementById("guardarConfiguracion");

const $config__option = document.getElementsByClassName("config__option")
const $config__button = document.getElementsByClassName("config__button")
$config__button.onclick = Text

function guardarDatos (event){
    event.preventDefault()
    const guardarConfiguracion = document.querySelector ("#guardarConfiguracion").value
    
console.log("Guardar configuración", guardarConfiguracion)

alert("Se han guardado los cambios")
}

const mensaje = document.getElementById('mensaje');

guardarConfiguracion.addEventListener('click', mostrarMensaje);

function mostrarMensaje() {
  mensaje.textContent = 'Se guardó la configuración';
  mensaje.style.display = 'block';
}
