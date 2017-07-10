import { Component, OnInit } from '@angular/core';
import {ApiHandlerService} from "../service/api-handler.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Place} from "./countries.component";

@Component({
  selector: 'app-places',
  templateUrl: '../view/places.component.html'
})
export class PlacesComponent implements OnInit {
  private router: Router;
  private place: string;
  public places: Place[] = [];

  constructor(private api: ApiHandlerService, private route: ActivatedRoute, router:Router) {
    this.router = router;
    route.params.subscribe(params => {
      this.place = params['text'];
      api.searchPlacesByText(this.place).subscribe(result => {
        this.places = result;
      })
    });
  }

  ngOnInit() {
  }

}
