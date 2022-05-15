let lista = [];

const agregarElemento = ()=> {
    let inputElemento = document.getElementById("elemento");
    const value = parseInt(inputElemento.value);
    const add = lista.push(value);
    let resultado = document.getElementById("listaTotal");
    let listado = lista.toString();
    resultado.innerText = listado;
}

// PROMEDIO

const promedioLista = (lista)=> {
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
    let promedio = sumaLista/lista.length;
    let resultado = document.getElementById("resultado");
    resultado.innerText = promedio;
    return promedio;
}

// MEDIANA

function medianaLista(lista) {
    lista.sort(function(a,b){return a-b;});
    const mitadLista = lista.length / 2;

    if (lista.length % 2 === 0) {
        const elemento1 = mitadLista - 1;
        const elemento2 = mitadLista;
        let mediana  = promedioLista([lista[elemento1],lista[elemento2]]);
        let resultado = document.getElementById("resultado");
        resultado.innerText = mediana;
    }
    else {
        let mediana = lista[parseInt(mitadLista)];
        let resultado = document.getElementById("resultado");
        resultado.innerText = mediana;
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
    let moda = arrayCount[0];
    let modaTexto = moda[0].toString();
    let resultado = document.getElementById("resultado");
    resultado.innerText = modaTexto;
}
