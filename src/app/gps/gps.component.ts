import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit {
  public longitude: any;
  public latitude: any;
  public distance: any;

  constructor() 
  {
    this.longitude = -77.1288;
    this.latitude = 38.8528;
    this.distance = 5;
  }

  ngOnInit() 
  {
  }
}
