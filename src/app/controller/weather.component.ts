import { Component } from '@angular/core';
import {ApiHandlerService} from "../service/api-handler.service";
import {ActivatedRoute} from "@angular/router";
import {WeatherSubscriberService} from "../service/weather-subscriber.service";

@Component({
  selector: 'app-weather',
  templateUrl: '../view/weather.component.html',
})
export class WeatherComponent {
  public weather: Weather = new Weather();
  private woeid:number;
  constructor(private api: ApiHandlerService, private route:ActivatedRoute, public subscriber: WeatherSubscriberService) {
    route.params.subscribe(params => {
      this.woeid = +params['woeid'];
      api.searchWeatherByWoeid(this.woeid).subscribe(result => {
        this.weather = result;
      })
    });
  }

  onClickHandler(woeid: string) {
    this.subscriber.addWoeid(woeid);
  }
}

export class Weather {
  public woeid: number;
  public item: Forecast = new Forecast();
}


export class Forecast {
  public forecast: ForecastItem[] = [];
  public pubDate: Date;
}

export class ForecastItem {
  public low: number;
  public high: number;
  public day: string;
  public text: string;
  public date: string;
}
