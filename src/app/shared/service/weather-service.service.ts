import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  apiKey: string = '80a45ccd9e0f4b407f613375515deda5';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string){
    // return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
  }
}
