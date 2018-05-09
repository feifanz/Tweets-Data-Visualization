import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  swearing_education_mel;

  constructor(private http:Http) {
    this.http.get('../assets/sa4_swearing.json')
                .subscribe(res => {
                  var sum = [];
                  var edu = [];
                  for(var key in res.json()['rows']){
                    sum.push(res.json()['rows'][key]['value']['sum']);
                    edu.push(res.json()['rows'][key]['value']['education']);
                  }
                  this.swearing_education_mel = [
                  {data : sum, label: 'swearing_sum'},
                  {data : edu, label: 'Education'}
                  ];
                  console.log(this.swearing_education_mel);
                });
  }

  ngOnInit() {
    const map: HTMLElement = document.getElementById('map');
    map.style.display= 'none';
  }
  //line chart
  public income_education_mel = [
  {data:[0.24,0.15,0.11,0.08,0.09,0.08,0.10,0.08,0.07], label: 'Income'},
  {data:[0.437,0.433,0.45,0.419,0.376,0.513,0.464,0.259,0.479], label: 'Positive'}
  ];

  public lineChartLabels:Array<any> = ['Inner', 'Inner-E', 'Inner-S', 'North-E', 'North-W', 'Outer-E', 'South-E', 'West', 'MP'];
  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  //stacked bar chart
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
  xAxes: [{
    stacked: true
  }],
  yAxes: [{
    stacked: true
  }]
  }

  };
  public barChartLabels:string[] = ['Inner', 'Inner-E', 'Inner-S', 'North-E', 'North-W', 'Outer-E', 'South-E', 'West', 'MP'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
  {data: [0.086, 0.099, 0.095, 0.104, 0.119, 0.065, 0.101, 0.039, 0.111], label: 'neg'},
  {data: [0.476, 0.467, 0.454, 0.476, 0.503, 0.421, 0.434, 0.700, 0.408], label: 'neu'},
  {data: [0.437, 0.433, 0.45, 0.419, 0.376, 0.513, 0.464, 0.259, 0.479], label: 'pos'}
  ];


   public barChartData2 = [
    {
      label: "socio-economicindex",
      data: [1094, 1070, 1063, 1028, 995, 1052, 997, 979, 1021],
      type: "bar",
      yAxisID: 'yAxis1'
    },
     {
      label: "Positive",
      data: [0.437, 0.433, 0.45, 0.419, 0.376, 0.513, 0.464, 0.259, 0.479],
      type: "line",
      fill: "false",
      yAxisID: 'yAxis2'
    }
  ];

  //public barChartLabels:string[] = ['Inner', 'Inner East', 'Inner South', 'North East', 'North West', 'Outer East', 'South East', 'West', 'Mornington Peninsula'];
  //public barChartType:string = 'bar';
  //public barChartLegend:boolean = true;
  public barChartOptions2:any = {
        scales: {
            yAxes: [
                {
                    id: 'yAxis1',
                    position: 'left'
                },
                {
                    id: 'yAxis2',
                    position: 'right'
                }
            ]
        }
    };
}
