import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  mel_stream;
  lineChartData;
  lineChartData_sub_mel;
  baseChartData_mel;
  baseChartData_syd;
  baseChartData_mel_syd;

  constructor(private http:Http) {
        this.http.get('../assets/Stream_Mel_Time_Output.json')
                .subscribe(res => {this.mel_stream = res.json();
                 //console.log(this.mel_stream);
                 this.lineChartData= [
                    {data:  this.mel_stream['Data']['2015'], label: '2015'},
                    {data:  this.mel_stream['Data']['2016'], label: '2016'},
                    {data:  this.mel_stream['Data']['2017'], label: '2017'},
                    {data:  this.mel_stream['Data']['2018'], label: '2018'},
                  ];
                       });
        this.http.get('../assets/Sub_Time_Mel_2018.json')
                .subscribe(res => {
                  this.lineChartData_sub_mel = [];
                  console.log(res.json());
                  for(var key in res.json()['Data']){
                    this.lineChartData_sub_mel.push(
                      {data : res.json()['Data'][key], label : key}
                    );
                  }
                  console.log(this.lineChartData_sub_mel);
              }); 

        this.http.get('../assets/Search_Mel_Time_Output.json')
                .subscribe(res => {this.baseChartData_mel = 
                   [
                    {data: res.json()["Percent_Data"], label: 'Melbourne'},
                  ];
                  this.baseChartData_mel_syd = [{data: res.json()["Count_Data"], label: 'Melbourne'}]
              });    

        this.http.get('../assets/Search_Syd_Time_Output.json')
                .subscribe(res => {this.baseChartData_syd = 
                   [
                    {data: res.json()["Percent_Data"], label: 'Sydney'},
                  ];
                  this.baseChartData_mel_syd.push({data: res.json()["Count_Data"], label: 'Sydney'});
                  //console.log(console.log(this.baseChartData_mel_syd));
              });  

 

   }


  ngOnInit() {

  }

  // lineChart
  public lineChartLabels:Array<any> = ['00', '01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', 
  '12', '13','14', '15', '16', '17', '18', '19', '20','21','22','23'];
   // lineChart
  public lineChartLabels_period:Array<any> = ['0-2', '3-5', '6-8', '9-11', '12-14', '15-17', '18-20','21-23'];
  public lineChartOptions:any = {
    responsive: true,
  };
  
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 

 
  //pieChart_1
  public pieChartLabels:string[] = ['00', '01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', 
  '12', '13','14', '15', '16', '17', '18', '19', '20','21','22','23'];
  public pieChartType:string = 'pie';


  //basechart_mel
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['00', '01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', 
  '12', '13','14', '15', '16', '17', '18', '19', '20','21','22','23'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
 //basechart_syn

  
}
