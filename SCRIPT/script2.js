function calcular(){

    let vector = [];
    let suma = 0;
    let suma36 = 0;
    let mayores50 = 0;

    for(let i=0;i<8;i++){

        vector[i] = parseInt(prompt("Ingrese las ventas realizadas por los 8 vendedores."));

        suma += vector[i];

        if(vector[i] > 36){
            suma36 += vector[i];
        }

        if(vector[i] > 50){
            mayores50++;
        }
    }

    document.getElementById("resultado").innerHTML =
    `ventas de vendedores: ${vector}<br>
    Total de ventas: ${suma}<br>
    Total de ventas mayores a 36: ${suma36}<br>
    Cantidad de vendedores que vendieron mas de 50: ${mayores50}`;
}