const calcularDescuento = () => {
    const inputPrecio = document.getElementById("precio");
    const precio = parseFloat(inputPrecio.value);

    const inputDescuento = document.getElementById("descuento");
    const descuento = parseFloat(inputDescuento.value);

    const valorFinal = (precio-(precio*descuento/100));
    const resultado = document.getElementById("resultado");
    resultado.innerText = "$"+valorFinal;
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

const calcularCupon = () => {
    const resultadoCupon = (descuento) => {
        let valorFinal = (precio-(precio*descuento/100));
        let resultado = document.getElementById("resultado-cupon");
        resultado.innerText = "$"+valorFinal;
    }
    const inputPrecio = document.getElementById("precio-cupon");
    const precio = parseFloat(inputPrecio.value);

    const inputCupon = document.getElementById("cupon");
    const cuponIngresado = inputCupon.value;

    if (cuponIngresado===cupones[0].nombre) {
        resultadoCupon(cupones[0].descuento);
    }
    else if (cuponIngresado===cupones[1].nombre) {
        resultadoCupon(cupones[1].descuento);
    }
    else {
        alert("NO VALIDO");
    }
}