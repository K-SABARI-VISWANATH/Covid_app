import { Component, OnInit } from '@angular/core';
import {CovidService} from 'src/app/service/covid.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  world:any;
  wactive:any;
  wrecover:any;
  wdeath:any;

  constructor(private covid: CovidService) { }

  ngOnInit(): void {
    this.covid.getWdata().subscribe((data)=>{
      var wor = 0;
      this.world=data[wor].cases;
      this.wactive=data[wor].active;
      this.wrecover=data[wor].recovered;
      this.wdeath=data[wor].deaths;
    })
  }

}
