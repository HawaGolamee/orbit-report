  import { Component } from '@angular/core';
  import { Satallite } from './satallite';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'orbit-report';
  }
  let  sourceList: Satallite[]; [
    constructor() {
      this.sourceList = [
        new Satallite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
        new Satallite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
        new Satallite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
        new Satallite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
        new Satallite("ISS", "Space Station", "1998-11-20", "LOW", true),
      ]
  }
  ]
