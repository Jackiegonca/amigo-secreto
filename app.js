// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


var inputAmigo = document.getElementById("amigo");

inputAmigo.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      agregarAmigo();
    }
});

let misAmigos = []

function actualizarListaAmigos(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(var i = 0; i < misAmigos.length; i++){

        let li = document.createElement("li");
        li.textContent = misAmigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo(){

    var friend = document.getElementById("amigo");
    var friendValue = friend.value.trim(); 

    if (friendValue === "") { 
        console.log("Amigo vacío");
        alert("Por favor, inserte un nombre.");
        friend.value = "";
        return;
    }

    if (!isNaN(friendValue)) { 
        console.log("Amigo es un número");
        alert("¡Introduzca un nombre válido!");
        friend.value = "";
        return;
    }

    misAmigos.push(friendValue)
    friend.value = "";
    actualizarListaAmigos()
}

function sortearAmigo(){
    
    listaAmigos = document.querySelectorAll("#listaAmigos li");

    if (listaAmigos.length === 0) {
        alert("No tienes amigos!")
        console.error("No se encontraron elementos con el selector proporcionado.");
        return null;
    
    }

    let numeroAleatoreo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[numeroAleatoreo];

    resultado = document.getElementById("resultado");
    resultado.textContent = "Amigo secreto: " + amigoSecreto.textContent;

}