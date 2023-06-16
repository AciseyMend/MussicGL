console.log("funcion")
console.log(document)
console.log(document.body)
console.log(document.getElementsByClassName("title"))
const $guardarConfiguracion = document.getElementById("guardarConfiguracion");
$guardarConfiguracion.addEventListener('click', guardarDatos);

const $config__option = document.getElementsByClassName("config__option")
const $config__button = document.getElementsByClassName("config__button")
$config__button.onclick = Text


function guardarDatos (event){
    event.preventDefault()
    const $guardarConfiguracion = document.querySelector ("#guardarConfiguracion").value
    
console.log("Guardar configuración", $guardarConfiguracion)

alert("Se han guardado los cambios")
}


$config__option.onsubmit = guardar_datos
$config__button.onsubmit = guardar_datos

