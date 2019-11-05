import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-server',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.css']
})
export class DataServerComponent implements OnInit 
{
  landmarks:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.getLocalLandmarks(-77.128800, 38.852858, 5);
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
