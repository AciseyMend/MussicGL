console.log("funcion")
console.log(document)
console.log(document.body)
console.log(document.querySelector("a").getAttribute(href))
console.log(document.getElementsByClassName("title"))
function guardar_datos (event){
    event.preventDefault()
    const $volumen = document.querySelector ("#volumen").value
    const $tema = document.querySelector ("#tema").value
    const $idioma = document.querySelector ("#idioma").value
console.log("Volumen: ", $volumen)
console.log("Tema: ", $tema)
console.log("Idioma:", $idioma)
alert("Se han guardado los cambios")
}


$volumen.onsubmit = guardar_datos
$tema.onsubmit = guardar_datos
$idioma.onsubmit = guardar_datos
