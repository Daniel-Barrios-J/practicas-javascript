function calcularDescuento() {
    const inputPrecio = document.getElementById("precio");
    const precio = parseFloat(inputPrecio.value);

    const inputDescuento = document.getElementById("descuento");
    const descuento = parseFloat(inputDescuento.value);

    const valorFinal = (precio-(precio*descuento/100));
    const resultado = document.getElementById("resultado");
    resultado.innerText = "El precio final es de: $"+valorFinal;
}