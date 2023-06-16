console.log("funcion")
console.log(document)
console.log(document.body)
console.log(document.getElementsByClassName("title"))

const $config__option = document.getElementsByClassName("config__option")
const $config__button = document.getElementsByClassName("config__button")
$config__button.onclick = Text


function guardar_datos (event){
    event.preventDefault()
    const $config__button = document.querySelector ("#config__button").value
    
console.log("Guardar configuración", $config__button)

alert("Se han guardado los cambios")
}


$config__option.onsubmit = guardar_datos
$config__button.onsubmit = guardar_datos

