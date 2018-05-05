import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.css']
})
export class MapviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
  public barChartLabels:string[] = ['Inner', 'Inner East', 'Inner South', 'North East', 'North West', 'Outer East', 'South East', 'West', 'Mornington Peninsula'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [0.086, 0.099, 0.095, 0.104, 0.119, 0.065, 0.101, 0.039, 0.111], label: 'neg'},
    {data: [0.476, 0.467, 0.454, 0.476, 0.503, 0.421, 0.434, 0.700, 0.408], label: 'neu'},
    {data: [0.437, 0.433, 0.45, 0.419, 0.376, 0.513, 0.464, 0.259, 0.479], label: 'pos'}
  ];

}
