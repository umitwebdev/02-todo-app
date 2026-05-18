let aufgaben = [];

let hinzufuegenButton = document.querySelector("#hinzufuegen-button");
hinzufuegenButton.addEventListener("click", aufgabeHinzufuegen);

function aufgabeHinzufuegen() {
    let eingabe = document.querySelector("#eingabe");
    let text = eingabe.value;
    if (text === "") {
        return;
    }
    eingabe.value = "";
    aufgaben.push(text);
    zeigeAufgaben();
}

function zeigeAufgaben() {
    let liste = document.querySelector("#todo-liste");
    let html = "";

    for (let i = 0; i < aufgaben.length; i++) {
    html += "<li>" + aufgaben[i] + "<button class='loeschen-button' onclick='loescheAufgabe(" + i + ")'>X</button></li>";
    }

    liste.innerHTML = html;
}

function loescheAufgabe(i) {
    aufgaben.splice(i, 1);
    zeigeAufgaben();

}
