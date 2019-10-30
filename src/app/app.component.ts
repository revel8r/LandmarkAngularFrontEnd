import { Component } from '@angular/core';

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

  gpsLocationLatitude = 100;
  gpsLocationLongitude = 200;

  landmarkLog = 'Landmark hits 1, 2, 3...';
}
