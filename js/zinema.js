var TotalButacas = [100, 150, 75, 50];
var ButacasLibres = [100, 150, 75, 50];
var cartelera = [];
numsala = 0;


async function obtenerDatosJSON() {

    try {

        let response = await fetch( "../JSON/Cartelera.json" );

        if( !response.ok ) {
            throw new Error( "Error al obtener los datos" ); 
        }

        let data = await  response.json();
        return data;

    } catch ( error ) {
        console.log( "Error al obtener los datos: ", error );
    }
}

const contenedorSalas = document.getElementById( "cartelera" );

obtenerDatosJSON().then( data => {
    cartelera = data;

    for ( let index = 0; index < 4; index++ ) {
        console.log(cartelera[ index ].image);
        document.getElementById( index+1 ).src = cartelera[ index ].image;
    }
    
});

contenedorSalas.addEventListener( "click", function( event ){

    if(event.target.classList.contains( "pelis" )) {

        const idPeliculas = event.target.id;
        var elementos = document.getElementById( "sala" + idPeliculas);
        numsala = idPeliculas - 1;

        for ( var i = 1; i <= 4; i++ ) {
            
            var id = "sala" + i;
            var elemento = document.getElementById( id );
        
            if ( elemento ) {
                elemento.style.display = "none";
            }
            
        }

        elementos.style.display = "block";
        elementos.querySelector("h3").textContent = cartelera[idPeliculas-1].nombre;
        document.getElementById( "textoSalaButaca" ).textContent = "TOTAL BUTACAS " + TotalButacas[ idPeliculas - 1 ] + " //Butacas Libres " + ButacasLibres[ idPeliculas - 1 ];

        document.getElementById( "textoSalaButaca" ).style.display = "block";
        document.getElementById( "compraentradas" ).style.display = "block";
    }
});

const num = document.getElementById( "numeroent" );
const bono = document.getElementById( "tipo" );

num.addEventListener( "input", Calcular );
bono.addEventListener( "input", Calcular );

function Calcular() {
    var nume = num.value;
    var bono = document.getElementById( "tipo" ).value;
    var resultado = nume * bono;

    document.getElementById( "precio" ).value = bono;
    document.getElementById( "total" ).value = resultado;
}

var btnComprar = document.getElementById( "comprar" );

btnComprar.addEventListener( "click", (e) => {
    var index = parseInt(document.getElementById( "numeroent" ).value);

    if ( ButacasLibres[ numsala ] > index ) {

    ButacasLibres[ numsala ] = ButacasLibres[ numsala ] - index;

    alert(
        "Se han comprado las entradas correctamente | quedan un total de: " +
        ButacasLibres[ numsala ]
    );

    document.getElementById( "textoSalaButaca" ).textContent = "TOTAL BUTACAS " + TotalButacas[ numsala ] + " //Butacas Libres " + ButacasLibres[ numsala ];

}   else {
    alert( "No hay suficientes butacas" );
    }
});
