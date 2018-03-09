import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MonthNameComponent } from './month-name/month-name.component';
import { DayNumberComponent } from './day-number/day-number.component';
import { JanuaryComponent } from './january/january.component';
import { FebruaryComponent } from './february/february.component';
import { MarchComponent } from './march/march.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';


@NgModule({
  declarations: [
    AppComponent,
    MonthNameComponent,
    DayNumberComponent,
    JanuaryComponent,
    FebruaryComponent,
    MarchComponent,
    AprilComponent,
    MayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'January',
        component:JanuaryComponent
      },
      {
        path:'February',
        component:FebruaryComponent
      },
      {
        path:'March',
        component:MarchComponent
      },
      {
        path:'April',
        component:AprilComponent
      },
      {
        path:'May',
        component:MayComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
