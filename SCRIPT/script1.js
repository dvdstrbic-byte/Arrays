function calcular(){

    let alturas=[
        parseFloat(document.getElementById("h1").value),
        parseFloat(document.getElementById("h2").value),
        parseFloat(document.getElementById("h3").value),
        parseFloat(document.getElementById("h4").value),
        parseFloat(document.getElementById("h5").value)
    ];

if(alturas.some(isNaN)){
    alert("Debe completar todas las alturas");
    return;
}

let suma=0;

for(let i=0; i<alturas.length; i++){
    suma += alturas[i];
}

let promedio=suma/alturas.length;

let mayores=0;
let menores=0;

for(let i=0; i<alturas.length; i++){

    if(alturas[i]>promedio){
        mayores++;
    }
    else if(alturas[i]<promedio){
        menores++;
    }
}

    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>

        Alturas: ${alturas.join("cm, ")}cm<br><br>
        Promedio: ${promedio.toFixed(2)} cm<br><br>
        Personas más altas que el promedio: ${mayores}<br>
        Personas más bajas que el promedio: ${menores}
    `;
}