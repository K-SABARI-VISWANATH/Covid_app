import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) {}

  getcountries():Observable<any>{
    const url ='https://api.covid19api.com/countries';
    return this.http.get<any>(url);
  }

  getRdata(country:any):Observable<any>{
    const url ='https://api.covid19api.com/total/dayone/country/'+country;
    return this.http.get<any>(url);
  }

  getWdata():Observable<any>{
    const url='https://coronavirus-19-api.herokuapp.com/countries';
    return this.http.get<any>(url);
  }
}
