import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from "./BucketList/bucket.component";
import { HomeComponent } from "./Home/home.component";

const appRoute : Routes =[
    {path:"",redirectTo:'/home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    { path: 'list', component: BucketListComponent },
   
]

@NgModule({

    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]

})

export class AppRoutingModule{
    
}