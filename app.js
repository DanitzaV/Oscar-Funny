bienvenida()
function bienvenida() {
  oscar.innerHTML = `<div>
  <h2>bienvenidos</h2>
  <button onclick="categoria1()">primera categoria</button>
</div>`
}

function categoria1(){
  oscar.innerHTML = `<div>
  <h2>Categoria blabla</h2>
  <button onclick="nominados1()">los nominados</button>
</div>`
}

function nominados1(){
  oscar.innerHTML = `<div>
  <h2>los nominados son blabla</h2>
  <button onclick="ganador1()">Ganador</button>
</div>`
}

function ganador1(){
  oscar.innerHTML = `<div>
  <h2>el ganador es</h2>
  <button onclick="nominados()">Siguiente categoria</button>
</div>`
}