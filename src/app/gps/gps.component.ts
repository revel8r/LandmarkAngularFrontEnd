import { Component, OnInit } from '@angular/core';

@Component(
{
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit 
{
  gpsLocationLatitude = 100;
  gpsLocationLongitude = 200;

  constructor() 
  { }

  ngOnInit() 
  {
  }
}
