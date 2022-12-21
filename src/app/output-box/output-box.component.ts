// @ts-nocheck
import { Component,Input,OnInit,OnChanges} from '@angular/core';

@Component({
  selector: 'app-output-box',
  templateUrl: './output-box.component.html',
  styleUrls: ['./output-box.component.css']
})
export class OutputBoxComponent implements OnInit,OnChanges{
  @Input() data:any;
  temp :any;
  url:any;
  ngOnChanges(){
    this.ngOnInit();
  }
  ngOnInit() {
    if (this.data) {
      this.temp = Math.round(this.data.main.temp-273.15);
      this.url = `http://openweathermap.org/img/w/${this.data.weather[0].icon}.png`
    }
    
  }

  
}
