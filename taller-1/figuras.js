// Cálculos para cuadrados
function perimetroCuadrado(lado) {
    return perimetro = lado*4;    
}
function areaCuadrado(lado) {
    return area = lado*lado;
}

// Cálculos para cuadrados
function perimetroTriangulo(lado1,lado2,base) {
    return perimetro = lado1 + lado2 + base;
} 

function areaTriangulo(base,altura) {
    return area = (base*altura)/2;
}

// Cálculos para cuadrados
function perimetroCirculo(radio) {
    return perimetro = radio*2*Math.PI; 
}
function areaCirculo(radio) {
    return areaCirculo = radio*radio*Math.PI;
}


// Interacción con HTML

function c_perimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es de: "+perimetro+"cm");
}

function c_areaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es de: "+ area+"cm cuadrados");
}
// -------RETO ISOCELES--------------------
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