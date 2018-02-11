import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";


@Component({
    selector: 'app-bucketForm',
    templateUrl: './bucketForm.component.html',
    styleUrls: ['bucketForm.component.css']

})
export class BucketFormComponent {

    //@ViewChild ('f') signupForm:NgForm; // alternative way to  get access to the controls of the form.

    defaultDate = Date.now().toLocaleString();
    defaultLocation = "Boston";
     addMore :number = 0;
    onSubmit(forms: NgForm) {
        console.log(forms);
    }

    onAddMoreClick(){
        this.addMore++;
    }

}

