import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit 
{
  voices: any[];
  voice: any;
 
  constructor() 
  { 
  }

  ngOnInit() 
  {
  }

  speak(whatToSay, voice)
  {
    var utterance = new SpeechSynthesisUtterance(whatToSay);

    utterance.voice = voice;
    
    console.log("utterance.voice: " + utterance.voice.name);

    window.speechSynthesis.speak(utterance);   
  }

  getVoices()
  {
    let promise = new Promise(resolve => 
    {
      window.speechSynthesis.onvoiceschanged = resolve;  
    });

    return promise;
  }
}
