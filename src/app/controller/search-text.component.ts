import {Component, OnInit} from '@angular/core';
import {ApiHandlerService} from "../service/api-handler.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-text',
  templateUrl: '../view/search-text.component.html'
})
export class SearchTextComponent implements OnInit {
  private router: Router;

  constructor(private api: ApiHandlerService, router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  searchClickHandler(text: string) {
    this.router.navigateByUrl('/places/' + text);
  }

}
