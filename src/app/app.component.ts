import { Component,OnInit } from '@angular/core';
import { ChatService } from './services/websocket.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


        export class AppComponent implements OnInit{


        
        message: string ;
        message1:string='0' ;
        message2:string='0' ;
        m=4 ;

          messages: string[] = [];
          title = 'Temparature level';
          LineChart:any=[];
        


          constructor(private chatService: ChatService) {
          
          
          }
          ngOnInit() {
            this.chatService
              .getMessages()
              .subscribe((message: string) => {
                this.messages.push(message);
                this.message1=message;
              })
              this.chatService
              .getMessages1()
              .subscribe((message: string) => {
                this.message2=message;
                this.LineChart = new Chart('lineChart', {

      
                  type: 'bar',
                data: {
                labels: ["", "", "", "", "", "","","","","","",""],
                datasets: [{
                    label: 'Value received from sensors',
                    data: [ parseFloat(this.message1),parseFloat(this.message2)],
                    fill:false,
                    lineTension:0.2,
                    borderColor:"red",
                    borderWidth: 1
                }]
                }, 
                options: {
                title:{
                    text:"Line Chart",
                    display:true
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
                }
                });
                
               
              })
             

            }


          
          
          sendMessage1() {
            this.chatService.sendMessage("allumer led");
          }




          



        
          public canvasWidth = 300
          public centralLabel = ''
          public name = 'Temperature °C'
          

          public options = {
              hasNeedle: true,
              needleColor: 'gray',
              needleUpdateSpeed: 1000,
              arcColors: ['rgb(44, 151, 222)', 'lightgray'],
              arcDelimiters: [30],
              rangeLabel: ['0', '100'],
              needleStartValue: 50,
          }


          


          public canvasWidth1 = 300
          public centralLabel1 = ''
          public name1 = 'Humidity'
          

          public options1 = {
              hasNeedle: true,
              needleColor: 'gray',
              needleUpdateSpeed: 1000,
              arcColors: ['rgb(44, 151, 222)', 'lightgray'],
              arcDelimiters: [30],
              rangeLabel: ['0', '100'],
              needleStartValue: 50,
          }


          gaugeType = "semi";
          animate=true
          gaugeLabel = "temperature";
          gaugeAppendText = "°C";
          foregroundColor='rgba(255, 0,0 , 1)';
          backgroundColor="rgba(0, 0, 0, 0.1)"	
          gaugeLabel1 = "humidiy";
          gaugeAppendText1= "";








          
        }
