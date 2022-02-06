import { WeatherCheck } from './components/WeatherCheck/WeatherCheck'

export const App = (): JSX.Element => {
  return (
    <div className="weather_app_main">
      <WeatherCheck />
    </div>
  );
}
