function ejecutar(){

    let numeros = [
        Number(document.getElementById("n1").value),
        Number(document.getElementById("n2").value),
        Number(document.getElementById("n3").value),
        Number(document.getElementById("n4").value),
        Number(document.getElementById("n5").value),
        Number(document.getElementById("n6").value)
    ];

    console.log(numeros);

    let original = [...numeros];

    numeros.sort((a,b) => a - b);
    
    let valorBuscado = Number(document.getElementById("buscar").value);

    let indice = original.indexOf(valorBuscado);

    let mensaje;

    if(indice !== -1){
        mensaje = `Número encontrado en el índice ${indice}`;
    }else{
        mensaje = "Número no encontrado";
    }

    document.getElementById("resultado").innerHTML = `
        <h3>Resultados</h3>

        <p>Array original: ${original}</p>

        <p>Array ordenado: ${numeros}</p>

        <p>Cantidad de elementos: ${original.length}</p>

        <p>Búsqueda: ${mensaje}</p>
    `;
}