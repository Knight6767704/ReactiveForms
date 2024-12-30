import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  reactiveForm: FormGroup ;
  submittedData: any = null;

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
      console.log(this.submittedData);
    }
    
  }
}
