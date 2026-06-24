let numeros = [];

function mostrar() {
    document.getElementById("resultado").innerHTML =
        numeros.join(" - ");
}

function agregar() {
    let numero = parseFloat(document.getElementById("numero").value);

    numeros.push(numero);

    mostrar();
}

function buscar() {

    let numero = parseFloat(document.getElementById("numero").value);

    if (numeros.includes(numero)) {
        alert("El número existe en el array");
    } else {
        alert("El número no existe");
    }
}

function modificar() {

    let viejo = parseFloat(prompt("Ingrese el número a modificar"));
    let nuevo = parseFloat(prompt("Ingrese el nuevo número"));

    let indice = numeros.indexOf(viejo);

    if (indice != -1) {
        numeros[indice] = nuevo;
        mostrar();
    } else {
        alert("Número no encontrado");
    }
}

function eliminar() {

    let numero = parseFloat(prompt("Ingrese el número a eliminar"));

    let indice = numeros.indexOf(numero);

    if (indice != -1) {
        numeros.splice(indice, 1);
        mostrar();
    } else {
        alert("Número no encontrado");
    }
}

function insertar() {

    let numero = parseFloat(prompt("Número a insertar"));
    let posicion = parseInt(prompt("Posición donde insertar"));

    if (posicion >= 0 && posicion <= numeros.length) {
        numeros.splice(posicion, 0, numero);
        mostrar();
    } else {
        alert("Posición inválida");
    }
}