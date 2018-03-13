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

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ButtonModule } from '@progress/kendo-angular-buttons/dist/es/button/button.module';
import { ProjectServices } from './BucketList/ProjectService';
import { PopupModule } from '@progress/kendo-angular-popup/dist/es2015/popup.module';
import {GridModule} from '@progress/kendo-angular-grid';
import {HttpClientModule} from '@angular/common/http';


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
    HttpModule,
    BrowserAnimationsModule,
    ButtonModule,
    GridModule,
    PopupModule,
    HttpClientModule 

    
    
    
  ],
  providers: [AppServices,ProjectServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
