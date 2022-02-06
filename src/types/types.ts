export interface weatherStatus {
  weatherFetch: weatherFetchSuccess | null | undefined;
  forecastFetch: forecastFetchSuccess | null | undefined;
  forecastDaysFetch: forecastDaysFetchSuccess | null | undefined;
  cityName: cityNameSuccess[] | null | undefined;
  isWeatherAppLoad: boolean;
  isWeatherAppError: boolean;
  weatherTodayName: string | null | undefined;
}


export interface cityNameSuccess {
 name: string;
 country_name: string;
  coordinates: weatherCoords;
}

export interface weatherCoords {
  lon: number;
  lat: number;
}
export interface weatherFetchSuccess {
  name: string;
  dt: number;
  coord: weatherCoords
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys:{
    sunrise: number;
    sunset: number;
  }
  weather: weatherFetchWeather[];
  timezone: number;
}
export interface weatherFetchWeather {
  description: string;
  icon: string;
}

export interface forecastFetchSuccess {
  list: forecastList[];
}
export interface forecastList {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  }
  weather: forecastWeather[];
}
export interface forecastWeather {
  description: string;
  icon: string;
}
export interface forecastDaysFetchSuccess {
  daily: forecastDaysList[];
  timezone_offset: number;
}
export interface forecastDaysList {
  dt: number;
  temp: {
    day: number;
  };
  feels_like: {
    day: number;
  };
  humidity: number;
  wind_speed: number;
  weather: forecastWeather[];
}
