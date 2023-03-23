import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ShowStuComponent } from './student/show-stu/show-stu.component';
import { AddEditStuComponent } from './student/add-edit-stu/add-edit-stu.component';
import { HttpClientModule } from "@angular/common/http";
import { SharedService } from "./shared.service";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { DepartmentComponent } from './department/department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RegistrationsComponent } from './pages/registrations/registrations.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ShowStuComponent,
    AddEditStuComponent,
    DepartmentComponent,
    RegistrationsComponent ,
    ShowDepComponent,   
    AddEditDepComponent, 
    HeaderComponent, 
    FooterComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
