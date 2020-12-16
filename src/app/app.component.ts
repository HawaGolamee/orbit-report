  import { Component } from '@angular/core';
  import { Satallite } from './satallite';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'orbit-report';
  sourceList: Satallite[] 
    constructor() {
      this.sourceList = [];
      let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
   
      window.fetch(satellitesUrl).then(function(response) {
         response.json().then(function(data) {
   
            let fetchedSatellites = data.satellites;
            // TODO: loop over satellites
           for (let i = fetchedSatellites; i < fetchedSatellites; i++)
            // TODO: create a Satellite object using 
            new Satallite (fetchedSatellites[i].name, 
              fetchedSatellites[i].type, 
              fetchedSatellites[i].launchDate, 
              fetchedSatellites[i].orbitType, 
              fetchedSatellites[i].operational);
            // TODO: add the new Satellite object to sourceList using: 
            this.sourceList.push(satallite);
   
         }.bind(this));
      }.bind(this));
   
   }

  //    title = 'orbit-report';
  // sourceList: Satallite[] = [
  //       new Satallite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
  //       new Satallite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
  //       new Satallite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
  //       new Satallite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
  //       new Satallite("ISS", "Space Station", "1998-11-20", "LOW", true),
  //     ]
  }
  

