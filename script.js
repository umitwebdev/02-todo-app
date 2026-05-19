let aufgaben = [];
let aktivFilter = "alle";
let bearbeitungsIndex = -1;

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

    if (aufgaben.length === 0) {
        html = "<p class='leer-nachricht'>Füge deine erste Aufgabe hinzu.</p>";
    } else {
        for (let i = 0; i < aufgaben.length; i++) {

            if (aktivFilter === "offen" && aufgaben[i].erledigt === true) {
                continue;
            }
            if (aktivFilter === "erledigt" && aufgaben[i].erledigt === false) {
                continue;
            }

            if (i === bearbeitungsIndex) {
                html += `<li>
                    <input id="edit-feld" type="text" value="${aufgaben[i].text}">
                    <div class="aufgabe-buttons">
                        <button onclick="speichereAufgabe(${i})">✅</button>
                    </div>
                </li>`;
            } else {
                let stil = aufgaben[i].erledigt ? "text-decoration: line-through; opacity: 0.5;" : "";
                html += `<li>
                    <span class="aufgabe-text" style="${stil}">${aufgaben[i].text}</span>
                    <div class="aufgabe-buttons">
                        <button onclick="bearbeiteAufgabe(${i})">✏️</button>
                        <button onclick="toggleAufgabe(${i})">✓</button>
                        <button class="loeschen-button" onclick="loescheAufgabe(${i})">X</button>
                    </div>
                </li>`;
            }
        }
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
function bearbeiteAufgabe(i) {
    bearbeitungsIndex = i;
    zeigeAufgaben();
}

function speichereAufgabe(i) {
    let editFeld = document.querySelector("#edit-feld");
    aufgaben[i].text = editFeld.value;
    bearbeitungsIndex = -1;
    zeigeAufgaben();
    localStorage.setItem("aufgaben", JSON.stringify(aufgaben));
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && bearbeitungsIndex !== -1) {
        speichereAufgabe(bearbeitungsIndex);
    }
});

function setFilter(filter) {
    aktivFilter = filter;
    zeigeAufgaben();
}

function setFilter(filter) {
    aktivFilter = filter;

    let buttons = document.querySelectorAll("#filter-buttons button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("aktiv");
    }

    if (filter === "alle") buttons[0].classList.add("aktiv");
    if (filter === "offen") buttons[1].classList.add("aktiv");
    if (filter === "erledigt") buttons[2].classList.add("aktiv");

    zeigeAufgaben();
}