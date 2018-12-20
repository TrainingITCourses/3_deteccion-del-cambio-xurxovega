import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ApiService } from './store/services/api.service';
import { DisplaySearcherComponent } from './display-searcher/display-searcher.component';
import { DisplayListLauncherComponent } from './display-list-launcher/display-list-launcher.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    DisplaySearcherComponent,
    DisplayListLauncherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
