let aufgaben = [];

let hinzufuegenButton = document.querySelector("#hinzufuegen-button");
hinzufuegenButton.addEventListener("click", aufgabeHinzufuegen);

function aufgabeHinzufuegen() {
    let eingabe = document.querySelector("#eingabe");
    let text = eingabe.value;
    aufgaben.push(text);
    zeigeAufgaben();
}

function zeigeAufgaben() {
    let liste = document.querySelector("#todo-liste");
    liste.innerHTML = "";

    for (let i = 0; i < aufgaben.length; i++) {
        liste.innerHTML += "<li>" + aufgaben[i] + "</li>";
    }
}