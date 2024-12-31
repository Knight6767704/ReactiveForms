import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule,NgIf, NgFor],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  reactiveForm: FormGroup ;
  submittedData: any = null;
  fields: { displayName: string; value: any }[] = [];

  ngOnInit(){
    this.reactiveForm=new FormGroup({
      firstname: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      lastname: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      username: new FormControl(null,[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]+$'), 
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]+$'
        ), 
      ]),
      gender: new FormControl('male'),
      address: new FormGroup({
      street: new FormControl(null,Validators.required),
      country: new FormControl('India',Validators.required),
      city: new FormControl(null,Validators.required),
      postal: new FormControl(null,[
        Validators.required,
        Validators.minLength(5), 
        Validators.maxLength(6), 
        Validators.pattern('^[0-9]+$'),
      ])
    })
  })
  }

  OnFormSubmitted(){
    if (this.reactiveForm.valid) {
      this.submittedData = this.reactiveForm.value;
      this.fields = [
        { displayName: 'First Name', value: this.submittedData.firstname },
        { displayName: 'Last Name', value: this.submittedData.lastname },
        { displayName: 'Email', value: this.submittedData.email },
        { displayName: 'Username', value: this.submittedData.username },
        { displayName: 'Password', value: '*******' }, 
        { displayName: 'Gender', value: this.submittedData.gender },
        { displayName: 'Street Address', value: this.submittedData.address.street },
        { displayName: 'Country', value: this.submittedData.address.country },
        { displayName: 'City', value: this.submittedData.address.city },
        { displayName: 'Postal Code', value: this.submittedData.address.postal }
      ];
    }
    
  }
}
