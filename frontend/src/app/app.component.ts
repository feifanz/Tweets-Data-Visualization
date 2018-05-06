import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  ngOnInit() {
    const map: HTMLElement = document.getElementById('map');
    map.style.display = 'none';
  }

}

