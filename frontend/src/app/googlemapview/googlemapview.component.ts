import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-googlemapview',
  templateUrl: './googlemapview.component.html',
  styleUrls: ['./googlemapview.component.css']
})
export class GooglemapviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const map: HTMLElement = document.getElementById('map');
    map.style.display = 'block';
  }

}
