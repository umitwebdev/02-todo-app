# 02-todo-app

Todo-App mit dynamischer Liste und Persistenz.

**Live:** [umitwebdev.github.io/02-todo-app](https://umitwebdev.github.io/02-todo-app)

## Features
- Aufgaben hinzufügen via Eingabefeld
- Leere Eingaben werden abgefangen
- Aufgaben einzeln löschen
- Aufgaben als erledigt markieren mit Strike-through (Toggle)
- Eingabefeld leert sich automatisch nach Eingabe
- Liste wird dynamisch per DOM aktualisiert (kein Page Reload)
- Vollständige LocalStorage-Persistenz – Aufgaben, gelöschte Einträge und erledigt-Status überleben F5
- CSS Styling: Card-Layout, lila Header, Input, Button, Listeneinträge
- Responsive Grundlage (viewport meta-Tag)

## Tech-Stack
- HTML5
- CSS3 (Flexbox, Card-Layout, Pseudo-Selektoren)
- Vanilla JavaScript (Arrays, Objekte, DOM-Manipulation, splice, push, ternärer Operator)
- LocalStorage, JSON.stringify / JSON.parse

## Setup
git clone https://github.com/umitwebdev/02-todo-app.git
cd 02-todo-app