import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  hero:string; 	
  constructor(private viewService: ViewService) { }

  ngOnInit() {
  	this.viewService.getHttpTest().then(res => this.hero = res);
  }

}
