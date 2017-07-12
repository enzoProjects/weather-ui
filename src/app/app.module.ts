import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SearchCountryComponent} from "./controller/search-country.component";
import {HttpModule} from "@angular/http";
import {ApiHandlerService} from "./service/api-handler.service";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import {PlatformModule, PortalModule} from "@angular/cdk";
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCheckboxModule,
  MdCoreModule,
  MdInputModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import "hammerjs";
import {CountriesComponent} from "./controller/countries.component";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./controller/weather.component";
import {SearchTextComponent} from "./controller/search-text.component";
import {PlacesComponent} from "./controller/places.component";
import {WeatherSubscriberService} from "./service/weather-subscriber.service";
import {LoginComponent} from "./controller/login.component";

const appRoutes: Routes = [
  {path: 'search/country', component: SearchCountryComponent},
  {path: 'search/place', component: SearchTextComponent},
  {path: 'places/:text', component: PlacesComponent},
  {path: 'country/:country', component: CountriesComponent},
  {path: 'weather/:woeid', component: WeatherComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SearchCountryComponent,
    CountriesComponent,
    WeatherComponent,
    SearchTextComponent,
    PlacesComponent,
    LoginComponent
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
  providers: [ApiHandlerService, WeatherSubscriberService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
