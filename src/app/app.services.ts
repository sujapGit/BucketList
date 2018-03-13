import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Country } from './Shared/Country';
import { Project } from './Shared/Project';

@Injectable()
export class AppServices{
    private greetUrl = 'api/Hello';

    constructor(private http: Http) {
        
    }

    sayHello(): Observable<any> {
        return this.http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }

    public getCountryJSON(): Observable<Country[]> {
         return this.http.get("../assets/countries.json")
                         .map((res:Response) => 
                         {
                             return <Country[]> res.json()  
                         }
                        )

     }

}