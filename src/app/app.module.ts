import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataServerComponent } from './data-server/data-server.component';
import { GpsComponent } from './gps/gps.component';
import { AgmCoreModule } from '@agm/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { RestService } from './rest.service';
import { SpeechComponent } from './speech/speech.component';

const appRoutes: Routes = 
[
  {
    path: 'landmarks',
    component: DataServerComponent,
    data: { title: 'landmarks' }
  },
  { path: '',
    redirectTo: '/landmarks',
    pathMatch: 'full'
  }
];

@NgModule
({
  declarations: [
    AppComponent,
    DataServerComponent,
    GpsComponent,
    SpeechComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAv4utgY4qw-VC7xc3MVKS9jPEpVj8_H-E',
      libraries: ['places']
    }),
    HttpClientModule ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
