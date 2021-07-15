//Esta función se llama al dar click al botón "Calcular altura"
function calcularAltura() {
    const inputUno = document.getElementById("inputLadoUno");
    const ladoUno = parseFloat(inputUno.value);
    const inputDos = document.getElementById("inputLadoDos");
    const ladoDos = parseFloat(inputDos.value);
    const inputLadoBase = document.getElementById("inputBase");
    const base = parseFloat(inputLadoBase.value);

    if (ladoUno === ladoDos) {
        if (ladoUno > 0 && base > 0) {
            const sumaLados = ladoUno+ladoDos;
            if (base < sumaLados) {
                //Para usar Pitágoras a2 + b2 = c2
                const c = ladoUno;
                const b = base/2;
                const a = Math.sqrt((c*c) - (b*b));
                alert("La altura es de: " + a + "cm");
            }
            else {
                alert("La base es mayor o igual a la suma de los lados, no existe altura.");
            }
        }
        else {
            alert("Los lados tienen que ser mayor a cero incluyendo la base");
        }
    }
    else {
        alert("Los lados 1 y 2 tienen que ser el del mismo tamaño");
    }
}