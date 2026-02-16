import { fetchWeather } from './api.js';
import { formatHour, formatDay, capitalize } from './utils.js';
export async function initWeatherWidget(container, location) {
  try {
    // Recupero dati asincrono dall'API OpenWeather
    const data = await fetchWeather(location);

    // Rendering dell'interfaccia: ho scelto un layout a schede impilate (stacked)
    // per massimizzare la leggibilità immediata di tutte le previsioni.
    container.innerHTML = `
      <div class="weather-wrapper">
        
        <div class="widget-card">
          <section class="slide current-view">
            <div>
              <h1 class="temp-big">${data.current.temp}°</h1>
              <p class="city-name">${data.locationName}</p>
            </div>
            <div class="main-icon">
              <img src="https://openweathermap.org/img/wn/${data.current.icon}@4x.png" width="80">
            </div>
          </section>
        </div>

        <div class="widget-card">
          <section class="slide">
            <div class="forecast-grid">
              ${data.hourly.map(h => `
                <div class="forecast-item">
                  <span class="val">${h.temp}°</span>
                  <img src="https://openweathermap.org/img/wn/${h.icon}.png">
                  <span class="label">${formatHour(h.time)}</span>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <div class="widget-card">
          <section class="slide">
            <div class="forecast-grid">
              ${data.daily.map(d => `
                <div class="forecast-item">
                  <span class="val">${d.temp}°</span>
                  <img src="https://openweathermap.org/img/wn/${d.icon}.png">
                  <span class="label">${capitalize(formatDay(d.date))}</span>
                </div>
              `).join('')}
            </div>
          </section>
        </div>

      </div>
    `;

  } catch (error) {
    // Gestione degli errori in caso di problemi con l'API o la connessione
    container.innerHTML = `<p class="error">Meteo non disponibile</p>`;
  }
}