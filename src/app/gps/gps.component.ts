import { Component, OnInit } from '@angular/core';

@Component(
{
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.css']
})
export class GpsComponent implements OnInit 
{
  public longitude: any;
  public latitude: any;
  public distance: any;

  public geolocationPosition: Position;

  display;

  constructor() 
  {
    this.distance = 5;
  }

  ngOnInit() 
  {
    this.getLocation();
  }

  getLocation()
  {
    let promise = new Promise((resolve, reject) =>
    {
      if ('geolocation' in navigator) 
      {
        navigator.geolocation.getCurrentPosition
        (
          position => 
          {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            
            //this.latitude = 27.641731;
            //this.longitude = -80.401209;

            console.info('gps.component.ts: this.latitude = ' + this.latitude +
                         'this.longitude =  ' + this.longitude);

            resolve();
          },
          error => 
          {
                switch (error.code) 
                {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }

                reject();
          }
        );
      }
      else
      {
        console.log("This browser does not support geolocation services.");
        reject();
      };
    });

    return promise;
  };
}
