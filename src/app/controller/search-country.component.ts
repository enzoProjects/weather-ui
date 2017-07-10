import {Component, OnInit} from '@angular/core';
import {ApiHandlerService} from "../service/api-handler.service";
import {FormControl} from '@angular/forms';
import {Observable} from "rxjs/Observable";
import {Router} from '@angular/router';


import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search-country',
  templateUrl: '../view/search-country.component.html'
})
export class SearchCountryComponent implements OnInit {
  public searchControl = new FormControl(); // our model driven form
  private countries: string[] = [];
  public filteredOptions: Observable<string[]>;
  private router:Router

  constructor(private api: ApiHandlerService, router: Router) {
    this.router = router;
    this.api.searchAllCountries().subscribe(sCountries => {
      sCountries.forEach((c) => {
        this.countries.push(c.name);
      });
    });
    this.filteredOptions = this.searchControl.valueChanges
      .map(val => val ? this.filter(val) : []);
  }

  ngOnInit() {

  }

  filter(val: string) {
    return this.countries.filter((option) => option
      .toLowerCase()
      .startsWith(val.toLowerCase()));
  }

  searchClickHandler(country: string) {
    if(this.countries.indexOf(country) == -1) console.warn("No country by that name");
    this.router.navigateByUrl('/country/' + country);
  }
}

