import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Country } from './Shared/Country';

@Injectable()
export class AppServices{

    constructor(private http: Http) {
        
    }

    public getCountryJSON(): Observable<Country[]> {
        console.log("sd");
         return this.http.get("../assets/countries.json")
                         .map((res:Response) => 
                         {
                             return <Country[]> res.json()  
                         }
                        )

     }
}