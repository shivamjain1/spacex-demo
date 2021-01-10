import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LaunchProgramsComponent } from './launch-programs/launch-programs.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchProgramsComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
