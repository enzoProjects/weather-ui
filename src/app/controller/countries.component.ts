import {Component} from '@angular/core';
import {ApiHandlerService} from "../service/api-handler.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'countries-view',
  templateUrl: '../view/countries.component.html'
})
export class CountriesComponent {
  places: Place[] = [];
  countryInfo: Place = new Place();

  private router:Router;
  country: string;

  constructor(private api: ApiHandlerService, private route: ActivatedRoute, router:Router) {
    this.router = router;
    route.params.subscribe(params => {
      this.country = params['country'];
      api.searchPlacesByCountry(this.country).subscribe(result => {
        this.places = result.childrens;
        this.countryInfo = result.countryInfo;
      })
    });


  }

}

export class Place {
  woeid:number;
  prettyName:string;
}
