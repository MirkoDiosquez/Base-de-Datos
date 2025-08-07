document.getElementById("boton").addEventListener("click",() => {
    var circle = document.getElementById("circulo");
    if(circle.style.backgroundColor != "red"){
        circle.style.backgroundColor = "red";
    }
    else{
        circle.style.backgroundColor = "grey";
    }
});

