import { Component } from '@angular/core';
import { GpsComponent } from './gps/gps.component';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Landmark';
  subtitle = 'Reading Historical Markers for Those On the Go';
  currentGPS = new GpsComponent();

  currentLongitude = this.currentGPS.longitude;
  currentLatitude = this.currentGPS.latitude;
}
