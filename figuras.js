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