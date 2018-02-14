import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AppServices } from "../app.services";
import { Title } from "@angular/platform-browser/src/browser/title";
import { Country } from "../Shared/Country";
import { Resolve } from "@angular/router/src/interfaces";


@Component({
    selector:'app-User',
    templateUrl:'./user.component.html',
    styleUrls:['user.component.css']
})
export class UserComponent implements OnInit {

    list : Country[];
    errorMessage: string; 
    constructor(private _appservice :AppServices){
  
        this.list =[];
       }
    
    genders = ['male','female'];
    signupForm : FormGroup;
    ngOnInit(){

        this._appservice.getCountryJSON().
        subscribe(
            (res) => {
               this.list = res
          }
        )
 
        this.signupForm = new FormGroup({
            'userName' : new FormControl(null,Validators.required),
            'email': new FormControl(null,[Validators.required,Validators.email]),
            'gender':new FormControl('male',Validators.required),
            'password':new FormControl(null,[Validators.required,this.passwordFunc.bind(this)]),
            'confirmPassword':new FormControl(null,[Validators.required,this.confirmPasswordFunc.bind(this)]),
            'dataAddress':new FormGroup({
                address:new FormControl(null,Validators.required),
                city:new FormControl(null,Validators.required),
                state:new FormControl(null,Validators.required),
                country:new FormControl(null)
            }),
        });

    }

    onSubmit(){
        console.log(this.signupForm.value.password );
    }

    passwordFunc(control:FormControl):{[s: string]: boolean} {
       
        let username = control.root.get('userName');
        let p = control.root.get('password');
        if(p && username && p.value==username.value)
        {
            return {'invalidPassword':true};
        }
        return null;
    }

    confirmPasswordFunc(control:FormControl):{[s:string]:boolean}{
        let password = control.root.get('password');
        let confirmPassword = control.root.get('confirmPassword');
        if(password && confirmPassword && password.value != confirmPassword.value)
        {
            return {'passwordMismatch':true};
        }
        return null;
    }

    clearConfrimPassword()
    {
       
       this.signupForm.root.get('confirmPassword').reset();
       
      
    }

   

}