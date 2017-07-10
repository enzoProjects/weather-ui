import { Injectable } from '@angular/core';
import {ApiHandlerService} from "./api-handler.service";
import {$WebSocket} from 'angular2-websocket/angular2-websocket'


@Injectable()
export class WeatherSubscriberService {

  constructor(private api:ApiHandlerService) {
    var ws = new $WebSocket("ws://localhost:8080/WeatherChallenge/counter");
    ws.send("Hello");
    ws.getDataStream().subscribe(
      res => {
        var count = JSON.parse(res.data).value;
        console.log('Got: ' + count);
      },
      function(e) { console.log('Error: ' + e.message); },
      function() { console.log('Completed'); }
    );
  }

  subscribe(woeid: string) {

  }


}
