import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit 
{
  voices: any;
 
  constructor() 
  { 
    this.voices = window.speechSynthesis.getVoices();

    console.log('Voices.length = ' + this.voices.length);
    this.voices.forEach(voice => 
    {
          console.log(voice.name);
    });
  }

  ngOnInit() 
  {
  }

  speak(whatToSay)
  {
    var utterance = new SpeechSynthesisUtterance(whatToSay);

    utterance.voice = this.voices.filter(function(voice) { return voice.name == 'Microsoft Mark - English (United States)'; })[0];
    
    window.speechSynthesis.speak(utterance);   
  }
}
