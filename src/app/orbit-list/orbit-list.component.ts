import { Component, Input, OnInit } from '@angular/core';
import { Satallite } from '../satallite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
@Input() satallites: Satallite[];
  constructor() { }

  ngOnInit() {
  }

}
