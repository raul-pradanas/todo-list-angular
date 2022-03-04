class Tarea {
    constructor(nombre, descripcion, estado, prioridad) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._estado = estado;
        this._prioridad = prioridad;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(name) {
        this._nombre = name;
    }
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(des) {
        this._descripcion = des;
    }
    get estado() {
        return this._estado;
    }
    set estado(est) {
        this._estado = est;
    }
    get prioridad() {
        return this._prioridad;
    }
    set prioridad(prio) {
        this._prioridad = prio;
    }
}
const misTareas = [
    new Tarea("Task 1", "Descripción de ejemplo", "todo", 23),
    new Tarea("Task 2", "Descripción de ejemplo", "todo", 13),
    new Tarea("Task 3", "Descripción de ejemplo", "done", 2),
    new Tarea("Task 4", "Descripción de ejemplo", "doing", 3),
];
document.getElementById("botonAñadirTarea").addEventListener("click", (e) => {
    e.preventDefault();
    /* Implement on click functionality */
    console.log("hola");
    crearTarea();
    actualizarPagina();
});
function crearTarea() {
    //Recogo los datos de la nueva tarea
    const liTitulo = document.getElementById("tituloTarea").value;
    const liDescripcion = document.getElementById("descripcionTarea").value;
    const liEstado = document.getElementById("estadoNuevaTarea").value;
    const liPrioridad = document.getElementById("prioridadTarea").value;
    //Clono el div que está oculto
    const tareaClonada = document.getElementById("tareaClonar");
    let template = tareaClonada.cloneNode(true);
    const lista = document.getElementById("listaGeneral");
    //Establezco los valores recogidos anteriormente
    template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
    template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
        liDescripcion;
    template.getElementsByClassName("EstadoMostrar")[0].innerHTML = liEstado;
    template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
        liPrioridad;
    lista.appendChild(template);
    const nuevaTarea = new Tarea(liTitulo, liDescripcion, liEstado, parseInt(liPrioridad));
    misTareas.push(nuevaTarea);
    if (liEstado === "todo") {
        const lista2 = document.getElementById("listaTodo");
        lista2.appendChild(template);
    }
    else if (liEstado === "doing") {
        const lista2 = document.getElementById("listaDoing");
        lista2.appendChild(template);
    }
    else if (liEstado === "done") {
        const lista2 = document.getElementById("listaDone");
        lista2.appendChild(template);
    }
    else {
        const lista2 = document.getElementById("listaDeleted");
        lista2.appendChild(template);
    }
}
//Muestra todas las tareas en la lusta general y las separa por estados
misTareas.forEach((element) => {
    //Recogo los datos de la nueva tarea
    const liTitulo = element.nombre;
    const liDescripcion = element.descripcion;
    const liEstado = element.estado;
    const liPrioridad = element.prioridad;
    //Clono el div que está oculto
    const tareaClonada = document.getElementById("tareaClonar");
    let template = tareaClonada.cloneNode(true);
    template.removeAttribute("id");
    const lista = document.getElementById("listaGeneral");
    //Establezco los valores recogidos anteriormente
    template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
    template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
        liDescripcion;
    template.getElementsByClassName("EstadoMostrar")[0].innerHTML = liEstado;
    template.getElementsByClassName("PrioridadMostrar")[0].innerHTML = String(liPrioridad);
    lista.appendChild(template);
    if (liEstado === "todo") {
        const lista2 = document.getElementById("listaTodo");
        lista2.appendChild(template);
    }
    else if (liEstado === "doing") {
        const lista2 = document.getElementById("listaDoing");
        lista2.appendChild(template);
    }
    else if (liEstado === "done") {
        const lista2 = document.getElementById("listaDone");
        lista2.appendChild(template);
    }
    else {
        const lista2 = document.getElementById("listaDeleted");
        lista2.appendChild(template);
    }
});
//Actualiza los estados de las tareas
function actualizarPagina() {
    const lista = document.getElementById("listaGeneral");
    let child = lista.lastElementChild;
    while (child) {
        lista.removeChild(child);
        child = lista.lastElementChild;
    }
    misTareas.forEach((element) => {
        //Recogo los datos de la nueva tarea
        const lTitulo = element.nombre;
        const lDescripcion = element.descripcion;
        const lEstado = element.estado;
        const lPrioridad = element.prioridad;
        //Clono el div que está oculto
        const tareaClonada = document.getElementById("tareaClonar");
        let template = tareaClonada.cloneNode(true);
        template.removeAttribute("id");
        //Establezco los valores recogidos anteriormente
        template.getElementsByClassName("TituloMostrar")[0].innerHTML = lTitulo;
        template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
            lDescripcion;
        template.getElementsByClassName("EstadoMostrar")[0].innerHTML = lEstado;
        template.getElementsByClassName("PrioridadMostrar")[0].innerHTML = String(lPrioridad);
        if (lEstado != "removed") {
            lista.appendChild(template);
        }
    });
}
//Borrado de las listas
document.getElementById("seguro").addEventListener("click", (e) => {
    e.preventDefault();
    /* Implement on click functionality */
    misTareas.forEach((element) => {
        //Recogo los datos de la nueva tarea
        const liTitulo = element.nombre;
        const liDescripcion = element.descripcion;
        const liEstado = element.estado;
        const liPrioridad = element.prioridad;
        //Clono el div que está oculto
        const tareaClonada = document.getElementById("tareaClonar");
        let template = tareaClonada.cloneNode(true);
        let lista = document.getElementById("listaToDo");
        template.removeAttribute("id");
        let seguro = document.getElementById("seguro");
        if (seguro.value === "todo") {
            let lista = document.getElementById("listaToDo");
        }
        else if (seguro.value === "doing") {
            let lista = document.getElementById("listaDoing");
        }
        else if (seguro.value === "done") {
            let lista = document.getElementById("listaDone");
        }
        else if (seguro.value === "deleted") {
            let lista = document.getElementById("listaDeleted");
        }
        //Establezco los valores recogidos anteriormente
        template.getElementsByClassName("TituloMostrar")[0].innerHTML = liTitulo;
        template.getElementsByClassName("DescripcionMostrar")[0].innerHTML =
            liDescripcion;
        template.getElementsByClassName("EstadoMostrar")[0].innerHTML = "deleted";
        template.getElementsByClassName("PrioridadMostrar")[0].innerHTML =
            String(liPrioridad);
        if (liEstado === "todo" && seguro.value === "todo") {
            element.estado = "deleted";
            const lista2 = document.getElementById("listaDeleted");
            lista2.appendChild(template);
            const mynode = document.getElementById("listaTodo");
            mynode.innerHTML = '';
        }
        else if (liEstado === "doing" && seguro.value === "doing") {
            element.estado = "deleted";
            const lista2 = document.getElementById("listaDeleted");
            lista2.appendChild(template);
            const mynode = document.getElementById("listaDoing");
            mynode.innerHTML = '';
        }
        else if (liEstado === "done" && seguro.value === "done") {
            element.estado = "deleted";
            const lista2 = document.getElementById("listaDeleted");
            lista2.appendChild(template);
            const mynode = document.getElementById("listaDone");
            mynode.innerHTML = '';
        }
        else if (liEstado === "deleted" && seguro.value === "deleted") {
            element.estado = "removed";
            const mynode = document.getElementById("listaDeleted");
            mynode.innerHTML = '';
        }
        else {
            //console.log("No hay tareas en la lista");
        }
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
        actualizarPagina();
    });
});
const modal = document.getElementById("myModal");
const btn = document.getElementById("vaciarTodo");
const btn2 = document.getElementById("vaciarDoing");
const btn3 = document.getElementById("vaciarDone");
const btn4 = document.getElementById("vaciarDeleted");
/* const prio = document.getElementById("prioTodo");
const prio2 = document.getElementById("prioDoing");
const prio3 = document.getElementById("prioDone");
const prio4 = document.getElementById("prioDeleted"); */
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("seguro").setAttribute("value", "todo");
};
btn2.onclick = function () {
    modal.style.display = "block";
    document.getElementById("seguro").setAttribute("value", "doing");
};
btn3.onclick = function () {
    modal.style.display = "block";
    document.getElementById("seguro").setAttribute("value", "done");
};
btn4.onclick = function () {
    modal.style.display = "block";
    document.getElementById("seguro").setAttribute("value", "deleted");
};
/* prio.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(1);
});

prio2.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(2);
  
});

prio3.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(3);
  
});

prio4.addEventListener("click", (e) => {
  e.preventDefault();
  // Implement on click functionality
  ordenarMisTareas(4);
  
});*/
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
document.getElementById("negacion").addEventListener("click", (e) => {
    e.preventDefault();
    /* Implement on click functionality */
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
});
actualizarPagina();
