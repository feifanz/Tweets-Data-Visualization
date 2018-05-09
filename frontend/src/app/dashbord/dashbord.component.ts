import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	  const map: HTMLElement = document.getElementById('map');
    map.style.display= 'none';
  }

}
