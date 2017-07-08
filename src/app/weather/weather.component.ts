import { Component } from '@angular/core';
import {ApiHandlerService} from "../api-handler.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  private woeid:number;
  constructor(private api: ApiHandlerService, route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.woeid = +params['woeid'];
      api.searchWeatherByWoeid(this.woeid).subscribe(result => {
        console.log(result);
      })
    });
  }



}
