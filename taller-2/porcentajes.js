function calcularDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precio = parseFloat(inputPrecio.value);

    const inputDescuento = document.getElementById("descuento");
    const descuento = parseFloat(inputDescuento.value);

    const valorFinal = (precio-(precio*descuento/100));
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final es de: $"+valorFinal;
}
// CUPONES---------------------
let cupones = [
    {
        nombre: "DANO_BANANO",
        descuento: 50,
    },
    {
        nombre: "PEDRITO_SOLA",
        descuento: 30,
    }
]

function calcularCupon() {
    const inputPrecio = document.getElementById("precio");
    const precio = parseFloat(inputPrecio.value);

    const inputCupon = document.getElementById("cupon");
    const cuponIngresado = inputCupon.value;

    if (cuponIngresado===cupones[0].nombre) {
        resultado(cupones[0].descuento);
    }
    else if (cuponIngresado===cupones[1].nombre) {
        resultado(cupones[1].descuento);
    }
    else {
        alert("NO VALIDO");
    }

    function resultado(descuento) {
        let valorFinal = (precio-(precio*descuento/100));
        let resultado = document.getElementById("resultado");
        resultado.innerText = "El precio final es de: $"+valorFinal;
    }
}