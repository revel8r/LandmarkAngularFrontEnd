import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

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
  }

  getLocation()
  {
    let promise = new Promise((resolve, reject) =>
    {
      if (window.navigator && window.navigator.geolocation) 
      {
        window.navigator.geolocation.getCurrentPosition
        (
          position => 
          {
                this.geolocationPosition = position;
                
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
        console.log("This brows does not support geolocation services.");
        reject();
      };
    });

    return promise;
    /*
    if (window.navigator && window.navigator.geolocation) 
    {
      window.navigator.geolocation.getCurrentPosition
      (
        position => 
        {
              this.geolocationPosition = position;
              console.log("Position: " + position);
              this.newLatitude = this.geolocationPosition.coords.latitude;
              console.log("NewLatitude: " + this.newLatitude);
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
        }
      );
    }; */
  };
}
