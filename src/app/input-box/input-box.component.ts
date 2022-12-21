import { HttpClient } from '@angular/common/http';
import { Component ,OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent  implements OnInit{

  city = "Indore";
  data = '';
  constructor(private http:HttpClient){}

  ngOnInit(): void {
       this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=
    ${this.city}
    &appid=75604dabe1d443f2296dedb386f124a4`).subscribe((data:any)=>{
      this.data = data;
      console.log(data)});
    this.city = '';
  }
  getData(q:any){
    this.city = q.value;
    this.ngOnInit();
    q.value = '';
  }
}
