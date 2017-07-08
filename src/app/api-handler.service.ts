import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiHandlerService {

  private ALL_COUNTRIES_ENDPOINT: string = "https://restcountries.eu/rest/v2/all";
  private BY_COUNTRY_PLACES_ENDPOINT: string = "/rest/place/country/";
  private BY_TEXT_PLACES_ENDPOINT: string = "/rest/place/text/";
  private BY_WOEID_WEATHER_ENDPOINT: string = "/rest/weather/woeid/";

  constructor(private http: Http) {
  }



  searchAllCountries(): Observable<any[]> {
    return this.http.get(this.ALL_COUNTRIES_ENDPOINT)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchPlacesByCountry(country:string): Observable<any> {
    const url = `${this.BY_COUNTRY_PLACES_ENDPOINT}${country}`;
    return this.http.get(url)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchPlacesByText(text:string): Observable<any> {
    const url = `${this.BY_TEXT_PLACES_ENDPOINT}/${text}`;
    return this.http.get(url)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  searchWeatherByWoeid(woeid:number): Observable<any> {
    const url = `${this.BY_WOEID_WEATHER_ENDPOINT}/${woeid}`;
    return this.http.get(url)
    // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
