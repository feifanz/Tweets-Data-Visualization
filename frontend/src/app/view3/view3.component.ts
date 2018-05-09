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
    const map: HTMLElement = document.getElementById('map');
    map.style.display= 'none';
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
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20"];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
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
      "1.60"
   ], label: 'Melbourne'},
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
      "1.59"
   ], label: 'Sydney'}
  ];

  public barChartData2:any[] = [
    {data: [
      "22.74",
      "16.02",
      "13.70",
      "22.48",
      "8.04",
      "5.97",
      "11.06"
      ], label: 'Melbourne'},
    {data: [
      "17.85",
      "14.15",
      "11.76",
      "23.78",
      "7.82",
      "11.31",
      "13.33"
      ], label: 'Sydney'}
  ];

  
   //line chart
  public lineChartData:Array<any> = [
    {data: [7.41, 5.56, 12.96, 16.67, 3.70, 12.96, 16.67, 14.81, 9.26], label: 'Aurin'},
    {data: [13.14, 1.92, 3.90, 5.13, 0.00, 12.00, 0.93, 1.64, 6.25], label: 'twitter'}
  ];

  public lineChartData2:Array<any> = [
    {data: [20.00, 12.50, 15.00, 10.00, 2.50, 7.5, 15, 12.5, 5], label: 'Aurin'},
    {data: [7.05, 5.77, 9.09, 2.56, 12.50, 8.00, 6.54, 13.11, 2.08], label: 'twitter'}
  ];

  public lineChartLabels:Array<any> = ['Inner', 'Inner-E', 'Inner-S', 'North East', 'North West', 'Outer East', 'South East', 'West', 'MP'];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  //bar3
   public barChartData3 = [
  {data:[39.27, 60.91, 63.09, 69.76, 72.49, 74.04, 74.64, 70.24, 76.33], label: 'Auto'},
  {data:[6.24, 1.55, 1.70, 1.16, 0.71, 0.6, 0.56, 1.07, 0.56], label: 'Bike'}
  ];

  //stacked bar chart
  public barChartOptions3:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
  xAxes: [{
    stacked: true
  }],
  yAxes: [{
    stacked: true,
    display: true,
    ticks:{
          steps : 20,
          min:35,
          max : 80,
    }
  }]
  }}

    public barChartType3:string = 'bar';
    public barChartLegend3:boolean = true;
    public barChartLabels3:string[] = ['Inner', 'Inner-E', 'Inner-S', 'North-East', 'North-West', 'Outer-East', 'South-East', 'West', 'MP'];

  //bar4
  //bar3
   public barChartData4 = [
  {data:[5.28, 7.69, 9.09, 5.13, 29.17, 4.00, 47.66, 4.92, 12.50], label: 'Auto'},
  {data:[15.04, 17.31, 12.99, 28.21, 12.50, 26.67, 12.15, 26.23, 16.67], label: 'Bike'}
  ];

  //stacked bar chart
  public barChartOptions4:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
  xAxes: [{
    stacked: true
  }],
  yAxes: [{
    stacked: true,
    display: true,
    ticks:{
          steps : 20,
          min:0,
          max : 80,
    }
  }]
  }}
    public barChartType4:string = 'bar';
    public barChartLegend4:boolean = true;
    public barChartLabels4:string[] = ['Inner', 'Inner-E', 'Inner-S', 'North-East', 'North-West', 'Outer-East', 'South-East', 'West', 'MP'];
}
