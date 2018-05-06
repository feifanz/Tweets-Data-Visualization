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

  public barChartData = [
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

  public barChartLabels:string[] = ['Inner', 'Inner East', 'Inner South', 'North East', 'North West', 'Outer East', 'South East', 'West', 'Mornington Peninsula'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartOptions:any = {
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
