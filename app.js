function amigos() {
    let amigosArray = [];
  
    function agregarAmigo() {
        let amigo = document.getElementById("amigo").value.trim();
        let lista = document.getElementById("listaAmigos");

        if (amigo === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        amigosArray.push(amigo);
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigo));
        lista.appendChild(li);
        document.getElementById("amigo").value = "";
    }

    function sortearAmigo() {
        if (amigosArray.length === 0) {
            alert("No hay amigos para sortear. Por favor, añade algunos nombres.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigosArray.length);
        let amigoSorteado = amigosArray[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.textContent = `El amigo secreto es: ${amigoSorteado}`;
    }

    return {
        agregarAmigo,
        sortearAmigo
    };
}

const app = amigos();