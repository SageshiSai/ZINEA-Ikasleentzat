var TotalButacas = [100, 150, 75, 50];
var ButacasLibres = [100, 150, 75, 50];

numsala = 0;


var pelis = document.querySelectorAll( ".pelis" );
var pelisCartelera = [ "IMG/mechanic.jpg" , "IMG/unmonstruo.jpg" , "IMG/missperegrine.jpg" , "IMG/ozzy.jpg" ];
var posiArray= 0;
pelis.forEach( pelisid => {
    pelisid.src = pelisCartelera[ posiArray ];
    posiArray++;
});

var imagetext = document.querySelectorAll();


function verDatos(numsala) {
  //var elementos = document.querySelectorAll(".sala1");
    var elementos = document.getElementById("sala" + numsala);
    for (var i = 1; i <= 4; i++) {
    // Cambia el 3 por el número máximo de salas que tengas
    var id = "sala" + i;
    var elemento = document.getElementById(id);

    if (elemento) {
        elemento.style.display = "none";
    }
    }
    elementos.style.display = "block";
    document.getElementById("textoSalaButaca").textContent =
    "TOTAL BUTACAS " +
    TotalButacas[numsala - 1] +
    " //Butacas Libres " +
    ButacasLibres[numsala - 1];
    document.getElementById("textoSalaButaca").style.display = "block";
    document.getElementById("compraentradas").style.display = "block";
}

function Calcular() {
    var num = document.getElementById("numeroent").value;
    var bono = document.getElementById("tipo").value;

  var resultado = num * bono;
    document.getElementById("precio").value = bono;
    document.getElementById("total").value = resultado;
}



var btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    var index = parseInt(document.getElementById("numeroent").value);

    if (ButacasLibres[numsala] > index) {
    ButacasLibres[numsala] = ButacasLibres[numsala] - index;
    alert(
        "Se han comprado las entradas correctamente | quedan un total de: " +
        ButacasLibres[numsala]
    );
    document.getElementById("textoSalaButaca").textContent =
    "TOTAL BUTACAS " +
    TotalButacas[numsala - 1] +
    " //Butacas Libres " +
    ButacasLibres[numsala - 1];
}   else {
    alert("No hay suficientes butacas");
    }
});
