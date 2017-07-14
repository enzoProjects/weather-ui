import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/login.service";
import {WeatherSubscriberService} from "../service/weather-subscriber.service";

@Component({
  selector: 'app-login',
  templateUrl: '../view/login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService, private weatherSubscriber: WeatherSubscriberService) {
  }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.loginService.login(username, password).subscribe(r => {
      if (r == "ERROR") console.log("bad credentials")
      else {
        this.loginService.setToken(r);
        this.weatherSubscriber.onLoginSuccess();
      }

    });

  }

  logout() {
    this.loginService.logout();
  }


}
