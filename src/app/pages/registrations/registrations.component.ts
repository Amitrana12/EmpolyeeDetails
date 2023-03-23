import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {
  @Output() registrationForm: FormGroup;
  // users: any[] = [];
  @Output() users: any[] = [];
  editedUser: any;
  submitted: any;
  textMessage:string = '';
  textLength:number = 250;
  selectedUser:any= null;

  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('[A-Z]{1}[a-z]+')]),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z]+[.]?[a-z]+[0-9]+[@][gmail]{5}[.][com]{3}')]),
      message: new FormControl('', [Validators.required, Validators.minLength(250), Validators.maxLength(250)]),
      gender: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });
    this.submitted = false;
  }
  ngOnInit(): void {
 
  }

  get name() { return this.registrationForm.get('name'); }
  get lname() { return this.registrationForm.get('lname'); }
  get email() { return this.registrationForm.get('email'); }
  get message() { return this.registrationForm.get('message'); }
  get gender() { return this.registrationForm.get('gender'); }
  get country() { return this.registrationForm.get('country'); }


  onSubmit() {
    const sendUserInfo = this.registrationForm.value;
    this.users.push(sendUserInfo);
    this.registrationForm.reset();
    this.submitted = true;


  }
  onCancel() {
    this.selectedUser = null;
    this.registrationForm.reset();
  }
  
  displayMessageLength(){
    if (this.textMessage.length <= 250){

    this.textLength = 250 - this.textMessage.length;
    }
  }
  get f(){
    return this.registrationForm.controls
  }

  
  
}
