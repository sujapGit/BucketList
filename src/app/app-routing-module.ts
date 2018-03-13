import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BucketListComponent } from "./BucketList/bucket.component";
import { HomeComponent } from "./Home/home.component";
import { BucketFormComponent } from "./BucketList/BucketForm/bucketForm.component";
import { UserComponent } from "./User/user.component";

const appRoute : Routes =[
    {path:"",redirectTo:'/home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    { path: 'list', component: BucketListComponent },
    { path: 'project/:projectId', component: BucketFormComponent },
    { path: 'project/New', component: BucketFormComponent },
    {path:'user/New',component:UserComponent}
   
]

@NgModule({

    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule]

})

export class AppRoutingModule{
    
}