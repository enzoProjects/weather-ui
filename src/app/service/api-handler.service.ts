import {Injectable}     from '@angular/core';
import {Connection, Http, URLSearchParams, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiHandlerService {

  private ALL_COUNTRIES_ENDPOINT: string = "https://restcountries.eu/rest/v2/all";
  private BY_COUNTRY_PLACES_ENDPOINT: string = "http://localhost:8080/WeatherChallenge/api/place/country/";
  private BY_TEXT_PLACES_ENDPOINT: string = "http://localhost:8080/WeatherChallenge/api/place/text/";
  private BY_WOEID_WEATHER_ENDPOINT: string = "http://localhost:8080/WeatherChallenge/api/weather/woeid/";
  private LOGIN_ENDPOINT: string = "http://localhost:8080/WeatherChallenge/login";
  private LOGOUT_ENDPOINT: string = "http://localhost:8080/WeatherChallenge/logout";

  constructor(private http: Http) {
  }


  searchAllCountries(): Observable<any[]> {
    return this.http.get(this.ALL_COUNTRIES_ENDPOINT)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchPlacesByCountry(country: string): Observable<any> {
    const url = `${this.BY_COUNTRY_PLACES_ENDPOINT}${country}`;
    return this.http.get(url)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchPlacesByText(text: string): Observable<any[]> {
    const url = `${this.BY_TEXT_PLACES_ENDPOINT}/${text}`;
    return this.http.get(url)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchWeatherByWoeid(woeid: number): Observable<any> {
    const url = `${this.BY_WOEID_WEATHER_ENDPOINT}/${woeid}`;
    return this.http.get(url)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  login(username: string, password: string): Observable<any> {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    return this.http.post(this.LOGIN_ENDPOINT, urlSearchParams)
      .map((res: Response) => res.text())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  logout(token: string): Observable<any> {
    let header = new Headers();
    header.append("Token", token);
    return this.http.get(this.LOGOUT_ENDPOINT, {headers: header})
      .map((res: Response) => res.text())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}

