import {Injectable} from "@angular/core";
import {$WebSocket} from "angular2-websocket/angular2-websocket";


@Injectable()
export class WeatherSubscriberService {
  private webSocket: $WebSocket;

  public updatePromise: Update = new Update();
  constructor() {
  }

  onLoginSuccess() {
    this.webSocket = new $WebSocket("ws://localhost:8080/WeatherChallenge/update");
    console.debug("begin websocket connection with update");
  }

  public addWoeid(woeid: string) {
    this.webSocket.send("{'woeid':" + woeid + ", 'action':'add'}").publish().connect();
  }


}

export class Update {
  private woeid: number;

  constructor(woeid: number = 0) {
    this.woeid = woeid;
  }
}
