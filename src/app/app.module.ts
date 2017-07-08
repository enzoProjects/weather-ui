import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchCountryComponent} from './search-country/search-country.component';
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";
import {ApiHandlerService} from "./api-handler.service";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import {PortalModule, PlatformModule} from "@angular/cdk";
import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdAutocompleteModule,
  MdCoreModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';
import {CountriesComponent} from './countries/countries.component';
import {RouterModule, Routes} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
  {path: 'search/country', component: SearchCountryComponent},
  {path: 'search/place', component: SearchCountryComponent},
  {path: 'country/:country', component: CountriesComponent},
  {path: 'weather/:woeid', component: WeatherComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SearchCountryComponent,
    CountriesComponent,
    WeatherComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PortalModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdAutocompleteModule,
    MdCoreModule,
    PlatformModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [ApiHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
