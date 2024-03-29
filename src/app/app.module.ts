import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe'
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    EmployeelistComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    HighchartsChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
