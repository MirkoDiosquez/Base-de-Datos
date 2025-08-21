
const boton = document.getElementById("agregar");
let lista = document.getElementById("lista");


boton.addEventListener("click", () => {

    const Prod = document.getElementById("producto");
    let nuevoElement = document.createElement("li");
    const botonEliminar = document.createElement("button");
    const botonTachar = document.createElement("button");

    botonEliminar.textContent = "Eliminar";
    botonTachar.textContent = "Tachar";

    nuevoElement.textContent = Prod.value  ;

    document.getElementById("producto").value = "";
    lista.appendChild(nuevoElement);
    nuevoElement.appendChild(botonEliminar);
    nuevoElement.appendChild(botonTachar);
    
    botonEliminar.addEventListener("click", () =>{
        lista.removeChild(nuevoElement);
    });
    
    botonTachar.addEventListener("click", () =>{
        nuevoElement.style.textDecoration = "line-through";
    }) ;
});

