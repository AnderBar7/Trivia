seleccionarpregunta(0)

function seleccionarpregunta(n) {
  let base_preguntas = readText('base_preguntas.json') 
  let interprete_bp = JSON.parse(base_preguntas)
  pregunta = interprete_bp[n]
  select_id ('categoria').innertHtml = pregunta.categoria
  select_id ('pregunta').innertHtml = pregunta.pregunta
  select_id ('imagen').setAttribute('src',pregunta.imagen)
  style ('imagen').objectFit = pregunta.objectFit;
  select_id ('btn1').innertHtml = pregunta.incorrecta1
  select_id ('btn2').innertHtml = pregunta.incorrecta2
  select_id ('btn3').innertHtml = pregunta.incorrecta3
  select_id ('btn4').innertHtml = pregunta.respuesta4;
}

function select_id(id) {
  return document.getElementById(id)
}

function style(id) {
  return select_id(id).style
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new
}




