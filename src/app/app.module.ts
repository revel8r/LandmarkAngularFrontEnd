import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataServerComponent } from './data-server/data-server.component';
import { GpsComponent } from './gps/gps.component';
import { SpeechComponent } from './speech/speech.component';

@NgModule({
  declarations: [
    AppComponent,
    DataServerComponent,
    GpsComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
