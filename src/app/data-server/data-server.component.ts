import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { GpsComponent } from '../gps/gps.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-server, app-gps',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.css']
})
export class DataServerComponent implements OnInit 
{
  landmarks:any = [];
  currentGPS = new GpsComponent();

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.getLocalLandmarks(this.currentGPS.longitude, this.currentGPS.latitude, this.currentGPS.distance);
  }

  getLocalLandmarks(latitude, longitude, distance)
  {
    this.landmarks = [];
    this.rest.getLocalLandmarks(longitude, latitude, distance).subscribe((data: {}) =>
    {
      console.log(data);
      this.landmarks = data;
    });
  }
}
