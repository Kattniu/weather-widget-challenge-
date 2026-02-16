# Weather Widget Challenge - Freedome

Questo progetto è la mia soluzione per la Weather Widget Challenge. Ho sviluppato un componente meteo modulare utilizzando esclusivamente tecnologie web standard, rispettando i requisiti di performance e design. Ho deciso di affrontare questa challenge per mettere alla prova le mie competenze di front-end e sperimentare un design moderno e funzionale, come quello che vorrei sviluppare in un vero progetto reale.

## Stack Tecnologico
- **HTML5** & **CSS3**: Utilizzo di Flexbox e Grid per un layout responsivo senza librerie esterne.
- **JavaScript (ES6+)**: Architettura modulare con import/export per una migliore manutenibilità.
- **OpenWeather API**: Integrazione dei dati correnti e delle previsioni (Forecast 5 days/3 hours).

## Scelte di Design e UX
Sebbene il mockup originale suggerisse una navigazione tramite swipe, ho optato per un **layout verticale a schede impilate (stacked cards)**. Questa decisione è stata presa per:
1. **Accessibilità**: Permettere all'utente di visualizzare tutte le informazioni critiche (meteo attuale, orario e giornaliero) con un unico colpo d'occhio senza interazioni aggiuntive.
2. **UX Desktop/Web**: Ottimizzare la fruizione del contenuto su dispositivi non touch, dove lo swipe orizzontale risulta meno intuitivo.
3. **Responsività**: Il widget si adatta a schermi grandi e dispositivi mobili, mantenendo leggibilità e layout coerente.

## Come usare il Widget
1. Apri `index.html` in un browser moderno che supporta moduli ES6.
2. Il widget si inizializza automaticamente utilizzando l'attributo `data-location`:
```html
<div id="weather-widget" data-location="Milano,it"></div>
## AI Policy
L'intelligenza artificiale è stata utilizzata come assistente alla programmazione (coding assistant) per ottimizzare la struttura dei moduli JavaScript, rifinire gli stili CSS e garantire la coerenza della documentazione tecnica. Questo approccio ha permesso di concentrarmi maggiormente sulla logica e sull'esperienza utente finale.