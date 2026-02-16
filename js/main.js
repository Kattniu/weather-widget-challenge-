import { initWeatherWidget } from './widget.js';
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('weather-widget');
    if (container) {
        initWeatherWidget(container, 'Milan, it ');
    }
});