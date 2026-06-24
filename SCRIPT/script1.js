function calcular() {
    let alturas = [];
    let suma = 0;

    for(let i=0; i<5; i++){
        alturas[i] = parseFloat(prompt("Ingrese altura (en cm)"));
        suma += alturas[i];
    }

    let promedio = suma / 5;
    let mayores = 0;
    let menores = 0;

    for(let i=0; i<5; i++){
        if(alturas[i] > promedio){
            mayores++;
        }else if(alturas[i] < promedio){
            menores++;
        }
    }
    

    document.getElementById("resultado").innerHTML =
        `Alturas colocadas en cm: ${alturas}<br>
        Promedio: ${promedio}<br>
        Más altos que el promedio: ${mayores}<br>
        Más bajos que el promedio: ${menores}`;
}