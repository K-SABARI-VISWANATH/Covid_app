import { Component, OnInit } from '@angular/core';
import {CovidService} from 'src/app/service/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries:any
  country:any
  confirmed:any
  recovered:any
  deaths:any

  constructor(private covid:CovidService) { }

  ngOnInit(): void {
    this.covid.getcountries().subscribe((data)=>{
      this.countries=data;
    })
  }

  getData(){
    this.covid.getRdata(this.country).subscribe((data)=>{
      var index = data.length - 1
      this.confirmed=data[index].Confirmed
      this.recovered=data[index].Recovered
      this.deaths=data[index].Deaths
    })
  }

  getCountry(country:any){
    this.country=country
  }

}
