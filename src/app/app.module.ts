import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BucketListComponent } from './BucketList/bucket.component';
import { HomeComponent } from './Home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
