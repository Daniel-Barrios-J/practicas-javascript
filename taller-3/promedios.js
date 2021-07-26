// PROMEDIO

function promedioLista(lista) {
    // Promedio con ciclo for
    // let sumaLista=0;
    // for (let i=0; i<lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    // Promedio con método reduce
    const sumaLista = lista.reduce(
        function(valorAcumulado=0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    return promedio = sumaLista/lista.length;
}

// MEDIANA

function medianaLista(lista) {
    lista.sort(function(a,b){return a-b;});
    const mitadLista = lista.length / 2;

    if (lista.length % 2 === 0) {
        const elemento1 = mitadLista - 1;
        const elemento2 = mitadLista;
        return promedioLista([lista[elemento1],lista[elemento2]]);
    }
    else {
        return lista[parseInt(mitadLista)];
    }
}

// MODA
function modaLista(lista) {
    const listaCount = {};
    lista.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1;
            }
        }
    );
    const arrayCount = Object.entries(listaCount).sort(function(a,b){return b[1]-a[1];});
    return arrayCount[0];
}
