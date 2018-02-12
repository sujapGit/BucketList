import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";




@Component({
    selector:'app-User',
    templateUrl:'./user.component.html',
    styleUrls:['user.component.css']
})
export class UserComponent implements OnInit {

     UserComponent(){

    }

    genders = ['male','female'];
    signupForm : FormGroup;
    ngOnInit(){
        this.signupForm = new FormGroup({
            'userName' : new FormControl(null,Validators.required),
            'email': new FormControl(null,[Validators.required,Validators.email]),
            'gender':new FormControl('male',Validators.required),
            'password':new FormControl(null,[Validators.required,this.passwordFunc.bind(this)]),
            'confirmPassword':new FormControl(null,[Validators.required]),
            'dataAddress':new FormGroup({
                address:new FormControl(null,Validators.required),
                city:new FormControl(null,Validators.required),
                state:new FormControl(null,Validators.required),
                country:new FormControl(null,Validators.required)
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

}