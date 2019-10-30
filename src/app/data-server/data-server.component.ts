import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-server',
  templateUrl: './data-server.component.html',
  styleUrls: ['./data-server.component.css']
})
export class DataServerComponent implements OnInit 
{
  landmarkLog = 'Landmark hits 1, 2, 3...';
  
  constructor() 
  { }

  ngOnInit() 
  {
  }

}
