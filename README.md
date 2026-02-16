Weather Widget Challenge - Freedome
Ho realizzato questo widget per la sfida tecnica di Freedome, pensando a come renderlo il più leggero e integrabile possibile nelle pagine delle "attività". L'obiettivo era unire un design pulito a una performance solida, senza caricare librerie inutili.

Il mio approccio
Per questo progetto ho scelto di tornare alle basi: HTML5, CSS3 e Vanilla JavaScript. Non ho usato framework come React o Vue perché volevo dimostrare che si può ottenere un risultato professionale e modulare anche solo con le tecnologie standard del web.

Scelte tecniche e "Soluzione Originale"
La sfida più interessante è stata la navigazione tra le tre viste (Meteo attuale, 5 ore e 5 giorni). Invece di usare plugin esterni per lo swipe, ho implementato una soluzione basata su CSS Scroll Snap. È una scelta che premia la velocità di caricamento della pagina: meno JavaScript da scaricare, più fluidità per l'utente.

Ecco altri dettagli su come ho lavorato:

Dati Dinamici: La località non è scritta nel codice, ma viene letta dall'attributo data-location. Questo rende il widget pronto per essere usato su qualsiasi pagina del sito Freedome semplicemente cambiando un parametro.

Gestione API: Mi sono occupato di trasformare i timestamp grezzi di OpenWeather in formati leggibili, gestendo i nomi dei giorni e le ore in italiano per una UX migliore.

Design: Ho cercato di essere il più fedele possibile al mockup di João Borges, curando i dettagli come i bordi arrotondati e i "dots" per la navigazione.

AI Policy
Come richiesto dal challenge, ci tengo a essere trasparente: ho usato l'AI come un "compagno di scrivania". Mi è servita per fare brainstorming su come ottimizzare il design.

Come installarlo
È semplicissimo. Basta includere gli script e il CSS, e aggiungere questa riga nell'HTML dove serve il meteo:
<div id="weather-widget" data-location="Milano,it"></di