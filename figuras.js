// Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return perimetro = lado*4;
    
}

function areaCuadrado(lado) {
    return area = lado*lado;
}

console.groupEnd();


// Codigo del triangulo

console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base) {
    return perimetro = lado1 + lado2 + base;
} 

function areaTriangulo(base,altura) {
    return area = (base*altura)/2;
}

console.groupEnd();


// Codigo del circulo
console.group("Circulos");

function perimetroCirculo(radio) {
    return perimetro = radio*2*Math.PI;
  
}

function areaCirculo(radio) {
    return areaCirculo = radio*radio*Math.PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

function c_perimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es de: "+perimetro+"cm");
}

function c_areaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    var area = areaCuadrado(value);
    alert("El área del cuadrado es de: "+ area+"cm cuadrados");
}