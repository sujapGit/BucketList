import { Component, ViewChild, OnInit, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Project } from "../../Shared/Project";
import { FormGroup } from "@angular/forms/src/model";
import { ProjectServices } from "../ProjectService";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe } from "@angular/common";


@Injectable()
@Component({
    selector: 'app-bucketForm',
    templateUrl: './bucketForm.component.html',
    styleUrls: ['bucketForm.component.css'],
    providers:[DatePipe]

})
export class BucketFormComponent implements OnInit {

    //@ViewChild ('f') signupForm:NgForm; // alternative way to  get access to the controls of the form.

    defaultDate = Date.now().toLocaleString();
    defaultLocation = "Boston";
    public project: any={};
    public projectId :number;
    public newproject :Project;

    constructor(
        private datePipe : DatePipe,
        private _projectService: ProjectServices,
        private route: ActivatedRoute,
        private router: Router) {
        route.params.subscribe(p => {
            this.projectId = p['projectId']
        });
        

    }

    

    ngOnInit() {

        if(this.projectId>0){
        this._projectService.getProjectById(this.projectId)
        .subscribe(
        result => {
            this.project ={
                ProjectId:result.projectId,
                Name:result.name,
                StartDate:this.datePipe.transform(result.startDate,'yyyy-MM-dd'),
                EndDate:this.datePipe.transform(result.endDate,'yyyy-MM-dd'),
                Description:result.description,
                StatusId:result.statusId,
                CreatedDate:result.CreatedDate
            }  
            
        }) 
        }
      
    }


    onSubmit(forms: NgForm) {
       if(this.project.projectId==0)
       {
        this.project.StatusId=1;
        this._projectService.addProject(this.project)
            .subscribe(
            result => {
                console.log(result);
            })
       }
       else{
           this._projectService.updateProject(this.project)
           .subscribe(
               result =>{
                   console.log(result);
               }
           )
       }
       

    }


}

