import { fetchWeather } from './api.js';
import { formatHour, formatDay, capitalize } from './utils.js';
import { initSwipe } from './swipe.js';

export async function initWeatherWidget(container, location) {
  try {
    // Recupero dati asincrono dall'API OpenWeather
    const data = await fetchWeather(location);
    container.innerHTML = `
      <div class="widget-card">
        <div class="slider" id="weather-slider">
          <section class="slide">
            <div class="current-view-content">
              <div>
                <h1 class="temp-big">${data.current.temp}°</h1>
                <p class="city-name">${data.locationName}</p>
              </div>
              <div class="main-icon">
                <img src="https://openweathermap.org/img/wn/${data.current.icon}@4x.png" width="80">
              </div>
            </div>
          </section>

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

        <div class="pagination">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    `;
    initSwipe();
  } catch (error) {
    // Gestione degli errori in caso di problemi con l'API o la connessione
    container.innerHTML = `<p class="error">Meteo non disponibile</p>`;
  }
}