import {Injectable} from "@angular/core";
import {$WebSocket} from "angular2-websocket/angular2-websocket";


@Injectable()
export class WeatherSubscriberService {
  private webSocket: $WebSocket;

  public updatePromise: Update = new Update();
  constructor() {
  }

  onLoginSucces() {
    this.webSocket = new $WebSocket("ws://localhost:8080/WeatherChallenge/update");
    console.debug("begin websocket connection with update");
  }

  public addWoeid(woeid: string) {
    this.webSocket.send("{'woeid':" + woeid + ", 'action':'add'}").getDataStream().subscribe(
      res => {
        this.updatePromise = new Update(JSON.parse(res.data));
        console.log('Got: ' + woeid);
      },
      function (e) {
        console.log('Error: ' + e.message);
      },
      function () {
        console.log('Completed');
      }
    );
  }


}

export class Update {
  private woeid: number;

  constructor(woeid: number = 0) {
    this.woeid = woeid;
  }
}
