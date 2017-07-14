import {Injectable} from '@angular/core';
import {ApiHandlerService} from "./api-handler.service";

@Injectable()
export class LoginService {

  private token;
  public connected;

  constructor(private api: ApiHandlerService) {
  }

  public login(username: string, password: string) {
    return this.api.login(username, password);
  }

  public logout() {
    this.api.logout(this.token).subscribe(
      r => {
        this.token = null;
        this.connected = null;
      }
    );
  }

  setToken(r: string) {
    this.token = r;
    this.connected = true;
  }

}
