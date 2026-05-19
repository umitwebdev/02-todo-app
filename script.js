let aufgaben = [];

let gespeichert = localStorage.getItem("aufgaben");

if (gespeichert !== null) {
    aufgaben = JSON.parse(gespeichert);
    zeigeAufgaben();
}

let hinzufuegenButton = document.querySelector("#hinzufuegen-button");
hinzufuegenButton.addEventListener("click", aufgabeHinzufuegen);

let eingabefeld = document.querySelector("#eingabe");
eingabefeld.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        aufgabeHinzufuegen();
    }
});

function aufgabeHinzufuegen() {
    let eingabe = document.querySelector("#eingabe");
    let text = eingabe.value;
    if (text === "") {
        return;
    }
    eingabe.value = "";
    aufgaben.push({text: text, erledigt: false});
    zeigeAufgaben();
    localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}

function zeigeAufgaben() {
    let liste = document.querySelector("#todo-liste");
    let html = "";

    for (let i = 0; i < aufgaben.length; i++) {
        let stil = aufgaben[i].erledigt ? "text-decoration: line-through; opacity: 0.5;" : "";
        html += `<li>
            <span class="aufgabe-text" style="${stil}">${aufgaben[i].text}</span>
            <div class="aufgabe-buttons">
                <button onclick="toggleAufgabe(${i})">✓</button>
                <button class="loeschen-button" onclick="loescheAufgabe(${i})">X</button>
            </div>
        </li>`;
    }

    liste.innerHTML = html;
}

function loescheAufgabe(i) {
    aufgaben.splice(i, 1);
    zeigeAufgaben();
    localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}

function toggleAufgabe(i) {
    if (aufgaben[i].erledigt === false) {
        aufgaben[i].erledigt = true;
    } else {
        aufgaben[i].erledigt = false;
    }
    zeigeAufgaben();
    localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}