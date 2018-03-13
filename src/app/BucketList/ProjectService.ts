import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Project } from '../Shared/Project';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ProjectServices {

    public url: string;
    public headers: Headers;
    public options: RequestOptions;

    constructor(private http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }



    public getProjectList() {

        return this.http.get('api/Project/GetProjects')
            .map(res => res.json());

    }

    public getProjectById(project)
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(project);
        this.url = "api/Project/GetProjectById/";
        return this.http.put(this.url+project , body,options)
            .map(res => res.json());
    }

    public addProject(project)
    {
        this.url = "api/Project/AddProject";
        let body = JSON.stringify(project);
        return this.http.post(this.url,body ,this.options )
            .map(res => res.json());
    }

    public updateProject(project)
    {
        this.url = "api/Project/updateProject";
        let body = JSON.stringify(project);
        return this.http.post(this.url,body ,this.options )
            .map(res => res.json());
    }

   

    public deleteProject(projectId) {
        this.url = "api/Project/DeleteProject";

       //let body = JSON.stringify(projectId);
       var data = {
        projectId : projectId  
       }
       //console.log('data',body);
       let body = new HttpParams();
       body.append('projectId',projectId)
       console.log(JSON.stringify(body));
        return this.http.post(this.url,JSON.stringify(body) ,this.options )
            .map(res => res.json());
    }

}