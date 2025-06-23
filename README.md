# WebSocket Dual Stack Example

Questo progetto dimostra una semplice architettura WebSocket con due implementazioni parallele:

- **Bun** (WebSocket nativo)
- **Node.js** con **Socket.IO**

Entrambe le implementazioni condividono logiche universali per:

- Ricevere dati JSON (campo `data`)
- Salvare i dati ricevuti in locale (cartella `data/`)
- Salvare i dati anche in una tabella SQLite

## Struttura delle cartelle

- `bun-server/` — Server WebSocket con Bun
- `node-server/` — Server WebSocket con Node.js + Socket.IO
- `shared/` — Logiche universali condivise (salvataggio file, SQLite, parsing dati)
- `data/` — Dove vengono salvati i dati ricevuti

## Avvio rapido

Vedi le rispettive cartelle per istruzioni su come avviare i server.
