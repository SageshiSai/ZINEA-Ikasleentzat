var TotalButacas =[100,150,75,50];
var ButacasLibres=[100,150,75,50];
numSala=0;

document.getElementById("sal1").src="IMG/mechanic.jpg";
document.getElementById("sal2").src="IMG/unmonstruo.jpg";
document.getElementById("sal3").src="IMG/missperegrine.jpg";
document.getElementById("sal4").src="IMG/ozzy.jpg";

function verDatos(numsala) {
    //var elementos = document.querySelectorAll(".sala1");
    var elementos = document.getElementById("sala"+numsala);
    for (var i = 1; i <= 4; i++) { // Cambia el 3 por el número máximo de salas que tengas
        var id = "sala" + i;
        var elemento = document.getElementById(id);
        
        if (elemento) {
            elemento.style.display = "none";
        }
    }
    elementos.style.display = "block";
    document.getElementById("compraentradas").style.display="block";
}

