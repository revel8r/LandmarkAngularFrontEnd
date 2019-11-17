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

    window.speechSynthesis.speak(utterance);   
  }
}
