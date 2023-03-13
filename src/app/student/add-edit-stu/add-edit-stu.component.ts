import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/shared.service";

@Component({
  selector: 'app-add-edit-stu',
  templateUrl: './add-edit-stu.component.html',
  styleUrls: ['./add-edit-stu.component.css']
})
export class AddEditStuComponent implements OnInit {

  @Input() student:any;
  StudentId:string = "";
  FullName: string ="";
  Class: string ="";
  Country: string ="";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.StudentId = this.student.StudentId;
    this.FullName = this.student.FullName;
    this.Class = this.student.Class;
    this.Country = this.student.Country;
  }

  addStudent(){
    var val = {StudentId:this.StudentId,
      FullName:this.FullName,
      Class:this.Class,
      Country:this.Country};
      this.service.addStudent(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateStudent(){
    var val = {StudentId:this.StudentId,
      FullName:this.FullName,
      Class:this.Class,
      Country:this.Country};
      this.service.updateStudent(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}