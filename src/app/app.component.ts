import { Component } from '@angular/core';
import { GpsComponent } from './gps/gps.component';
import { DataServerComponent } from './data-server/data-server.component';

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
  latitude: any;
  longitude: any;
  dataServer: any;

  currentGPS = new GpsComponent();
  promiseResult = this.currentGPS.getLocation().then
  (
    () => {
            this.latitude = this.currentGPS.geolocationPosition.coords.latitude;
            this.longitude = this.currentGPS.geolocationPosition.coords.longitude;
          },
    () => { console.log("Error on getLocation processing") }
  );
}
