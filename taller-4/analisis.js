let listaObjeto = [];
let lista = [];
//Agregar elementos
const agregarElemento = () => {
    let inputNombre = document.getElementById("nombre");
    const nombre = inputNombre.value;
    console.log(nombre);
    let inputSalario = document.getElementById("salario");
    const salario = parseInt(inputSalario.value);

    listaObjeto.push({
    name: nombre,
    salary: salario,
    })
    const add = lista.push(salario);
    console.log(lista,listaObjeto);
    // agregar impresion de lista
}

// PROMEDIO
const promedioLista = (lista)=> {
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

// Mediana del top 10%
const medianaDiezPorCiento = (lista)=>{
    
    lista.sort(function(a,b){return a-b;});
    const spliceStart = (lista.length * 0.9);
    const spliceCount = lista.length - spliceStart;
    const salariosTop10 = lista.splice(spliceStart,
    spliceCount);
    console.log("aqui mano");
    console.log(spliceStart);
    console.log(spliceCount);
    console.log(salariosTop10);
    const medianaTop10 = medianaLista(salariosTop10);
}
  
  