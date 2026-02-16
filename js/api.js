const API_KEY = '67e85c0d30cb16dce9098449cbb762db';
const BASE_URL = 'https://api.openweathermap.org';
/**
 * Questa funzione si occupa di tutto: prende il nome di una città 
 * e mi restituisce tutti i dati pronti per essere usati nel widget.
 */
export async function fetchWeather(location) {
  try {
    // 1. Trasformo il nome della città in coordinate (latitudine e longitudine)
    const geoRes = await fetch(`${BASE_URL}/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`);
    const geoData = await geoRes.json();
    // Se la città non esiste, mi fermo e segnalo l'errore
    if (!geoData.length) throw new Error('Location not found');
    const { lat, lon, name, country } = geoData[0];
    // 2. Con le coordinate, chiedo le previsioni meteo complete (metrica = gradi Celsius)
    const weatherRes = await fetch(`${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=it&appid=${API_KEY}`);
    const weatherData = await weatherRes.json();

    return {
      locationName: `${name}, ${country}`,
      current: {
        temp: Math.round(weatherData.list[0].main.temp),
        description: weatherData.list[0].weather[0].description,
        icon: weatherData.list[0].weather[0].icon
      },

      hourly: weatherData.list.slice(0, 5).map(item => ({
        temp: Math.round(item.main.temp),
        time: item.dt,
        icon: item.weather[0].icon
      })),
      //Dati per la terza scheda: i prossimi 5 giorni
      // Prendo un dato ogni 8 (visto che l'API dà dati ogni 3 ore, 3x8=24 ore)
      daily: weatherData.list.filter((_, i) => i % 8 === 0).slice(0, 5).map(item => ({
        temp: Math.round(item.main.temp),
        date: item.dt,
        icon: item.weather[0].icon
      }))
    };
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
}
