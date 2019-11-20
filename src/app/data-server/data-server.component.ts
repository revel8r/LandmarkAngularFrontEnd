import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { GpsComponent } from '../gps/gps.component';
import { SpeechComponent } from '../speech/speech.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-server, app-gps',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.css']
})
export class DataServerComponent implements OnInit 
{
  landmarks:any = [];
  currentGPS: any;
  promiseResult: any;
  latitude: any;
  longitude: any;
  speech: SpeechComponent;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.currentGPS = new GpsComponent();
    this.promiseResult = this.currentGPS.getLocation().then
    (
      () => {
              this.latitude = this.currentGPS.geolocationPosition.coords.latitude;
              this.longitude = this.currentGPS.geolocationPosition.coords.longitude;

              this.getLocalLandmarks(
                this.longitude, 
                this.latitude, 
                this.currentGPS.distance);
            },
      () => { console.log("Error on getLocation processing") }
    );  
  }

  getLocalLandmarks(latitude, longitude, distance)
  {
    this.landmarks = [];
    this.rest.getLocalLandmarks(longitude, latitude, distance).subscribe((data: {}) =>
    {
      //console.log(data);
      this.landmarks = data;
               
      //console.log(this.landmarks.length);

      this.speech = new SpeechComponent();

      this.promiseResult = this.speech.getVoices().then(() => 
      {
        const synth = window.speechSynthesis;

        this.speech.voices = synth.getVoices();
        console.log(this.speech.voices);

        const voice = this.speech.voices.filter(function(voice) 
        { 
          return voice.name == 'Google US English'; 
        })[0];

        console.log("voice: " + voice.name);

        this.landmarks.forEach(landmark => 
        {
            this.speech.speak("Longitude: " + landmark.Longitude, voice);
            this.speech.speak("Latitude: " + landmark.Latitude, voice);
            this.speech.speak(landmark.Title, voice);
            this.speech.speak(landmark.Description, voice);
        });
      })
      .catch((e) => 
      {
        console.log("error: ", e);
 
        const voice = this.speech.voices.filter(function(voice) 
        { 
          return voice.name == 'Microsoft Zira - English (United States)'; 
        })[0];       

        this.landmarks.forEach(landmark => 
          {
              this.speech.speak("Longitude: " + landmark.Longitude, voice);
              this.speech.speak("Latitude: " + landmark.Latitude, voice);
              this.speech.speak(landmark.Title, voice);
              this.speech.speak(landmark.Description, voice);
          });
      });
    })
  }
}
