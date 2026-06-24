function calcular() {

    let promM =
    (Number(document.getElementById("m1").value) +
    Number(document.getElementById("m2").value) +
    Number(document.getElementById("m3").value) +
    Number(document.getElementById("m4").value) +
    Number(document.getElementById("m5").value)) / 5;

    let promT =
    (Number(document.getElementById("t1").value) +
    Number(document.getElementById("t2").value) +
    Number(document.getElementById("t3").value) +
    Number(document.getElementById("t4").value) +
    Number(document.getElementById("t5").value) +
    Number(document.getElementById("t6").value)) / 6;

    let promN =
    (Number(document.getElementById("n1").value) +
    Number(document.getElementById("n2").value) +
    Number(document.getElementById("n3").value) +
    Number(document.getElementById("n4").value) +
    Number(document.getElementById("n5").value) +
    Number(document.getElementById("n6").value) +
    Number(document.getElementById("n7").value) +
    Number(document.getElementById("n8").value) +
    Number(document.getElementById("n9").value) +
    Number(document.getElementById("n10").value) +
    Number(document.getElementById("n11").value)) / 11;

    let mayor = "Turno Mañana";

    if (promT > promM && promT > promN) {
        mayor = "Turno Tarde";
    }

    if (promN > promM && promN > promT) {
        mayor = "Turno Noche";
    }

    document.getElementById("resultado").innerHTML =
    `Promedio Mañana: ${promM.toFixed(2)} <br>
     Promedio Tarde: ${promT.toFixed(2)} <br>
     Promedio Noche: ${promN.toFixed(2)} <br><br>
     ${mayor} tiene el promedio más alto.`;
}