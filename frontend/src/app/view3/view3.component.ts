import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {

   swearing_education_mel;
 
  constructor() {}

  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels2:string[] = [
      "sport",
      "vehicle",
      "politics",
      "science",
      "computer",
      "sales",
      "others"
  ];
  public barChartLabels:string[] = [
      "christian",
      "forsale",
      "autos",
      "motorcycles",
      "baseball",
      "hockey",
      "misc",
      "guns",
      "mideast",
      "sci.crypt",
      "electronics",
      "medicine",
      "space",
      "comp.graphics",
      "ms-windows.misc",
      "ibm.pc.hardware",
      "mac.hardware",
      "windows.x",
      "religion.misc",
      "atheism"];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [ 
      "10.87",
      "11.31",
      "5.72",
      "8.42",
      "7.74",
      "10.11",
      "6.57",
      "2.65",
      "2.55",
      "2.09",
      "6.07",
      "7.51",
      "8.12",
      "2.66",
      "1.24",
      "0.66",
      "2.08",
      "1.19",
      "0.87",
      "1.59"], label: 'Melbourne'},
    {data: [
      "8.80",
      "5.97",
      "7.24",
      "8.77",
      "7.81",
      "14.93",
      "6.91",
      "2.58",
      "4.21",
      "1.98",
      "5.48",
      "6.64",
      "8.37",
      "2.64",
      "1.28",
      "0.67",
      "2.20",
      "1.24",
      "0.65",
      "1.60"], label: 'Sydney'}
  ];

  public barChartData2:any[] = [
    {data: [ 
      "22.74",
      "16.02",
      "13.70",
      "22.48",
      "8.04",
      "6.62",
      "10.40"
      ], label: 'Melbourne'},
    {data: [
      "17.85",
      "14.15",
      "11.76",
      "23.78",
      "7.82",
      "12.18",
      "12.46"
      ], label: 'Sydney'}
  ];
  
  

}
