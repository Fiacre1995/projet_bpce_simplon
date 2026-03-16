export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true&hourly=temperature_2m,precipitation,weathercode&timezone=${cityInput}&forecast_days=7`
  );
  const data = await getWeatherData.json();
  res.status(200).json(data);
}
