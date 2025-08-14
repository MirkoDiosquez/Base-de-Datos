let circulo = document.getElementById("circulo");
let value = document.getElementById("colorInput").value;

document.getElementById("boton").addEventListener("click",() => {
    let colorInput = document.getElementById("colorInput").value;
    circulo.style.backgroundColor = colorInput;
});
