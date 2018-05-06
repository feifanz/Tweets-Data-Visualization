import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map: HTMLElement = document.getElementById('map');
    map.style.display= 'none';
  }

}
