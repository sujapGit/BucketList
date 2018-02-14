import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BucketListComponent } from './BucketList/bucket.component';
import { HomeComponent } from './Home/home.component';
import { BucketFormComponent } from './BucketList/BucketForm/bucketForm.component';
import { UserComponent } from './User/user.component';
import { AppServices } from './app.services';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    HomeComponent,
    BucketFormComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
    
    
  ],
  providers: [AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
