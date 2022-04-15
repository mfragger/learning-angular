//It's best to check this module first and before we make module specific for routing.
//There might be conflicts where 2 objects will be declared in declarations but different module.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// WHAT THE !? Why are we sensitive to proper grammar now!?
// import { RouterModule, Route } from '@angular/router';
//                            ^ can't use this coz you know... we're sensitive to being plural
//                            this is not english.
import { RouterModule, Routes } from '@angular/router';

//Automatically added when we create new component.
//but this is the pattern of importing it and then doing something with it.
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { SampleNewPageComponent } from './sample-new-page/sample-new-page.component';
import { AddTeamComponent } from './add-team/add-team.component';

//app.component.html is the base and is always rendered.
//Routes is an interface. Check w/ F12.
const appRoute: Routes = [
  { path: '', component: AddTeamComponent },
  { path: 'sample', component: SampleNewPageComponent }
];

//Add all the modules you want here.
//So they're discoverd via html tag shenanigans.
@NgModule({
  declarations: [
    AddTeamComponent,
    AppComponent,
    TeamComponent,
    SampleNewPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
