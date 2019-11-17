import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
  }

  speak(whatToSay)
  {
    var utterance = new SpeechSynthesisUtterance(whatToSay);
    var voices = window.speechSynthesis.getVoices();
    /*console.log('Voices.length = ' + voices.length);
    voices.forEach(voice => 
    {
      console.log(voice.name);
    });*/

    utterance.voice = voices.filter(function(voice) { return voice.name == 'Microsoft Mark - English (United States)'; })[0];
    
    window.speechSynthesis.speak(utterance);   
  }
}
