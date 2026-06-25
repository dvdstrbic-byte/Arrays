function calcular(){
let edades=[
    parseInt(document.getElementById("e1").value),
    parseInt(document.getElementById("e2").value),
    parseInt(document.getElementById("e3").value),
    parseInt(document.getElementById("e4").value),
    parseInt(document.getElementById("e5").value),
    parseInt(document.getElementById("e6").value),
    parseInt(document.getElementById("e7").value),
    parseInt(document.getElementById("e8").value)
];

if(edades.some(isNaN)){
    alert("Debe completar todas las edades");
        return;
}

let suma=0;
let sumaMayores36=0;
let mayores50=0;

for(let i=0; i<edades.length; i++){

    suma += edades[i];

if(edades[i]>36){
        sumaMayores36 += edades[i];
}

if(edades[i]>50){
        mayores50++;
    }
}

let promedio=suma/edades.length;

    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>

        Edades ingresadas: ${edades.join(", ")}<br><br>
        Suma total de edades: ${suma}<br>
        Promedio de edades: ${promedio.toFixed(2)}<br>
        Suma de edades mayores a 36 años: ${sumaMayores36}<br>
        Cantidad de personas mayores a 50 años: ${mayores50}
    `;
}