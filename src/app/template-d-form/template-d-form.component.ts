import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-d-form',
  templateUrl: './template-d-form.component.html',
  styleUrl: './template-d-form.component.scss'
})
export class TemplateDFormComponent {
  title: string = "Template Driven Forms"

  userForm: {name:string, email:string , phoneNo: string} = {
    name: "",
    email:"",
    phoneNo:"",
  }

  submitForm(form: NgForm){
    if(form.valid){
      console.log(form.value , this.userForm)
      console.log(this.Form.value);
      
    }
  }

  validatedEmail(): boolean{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailRegex.test(this.userForm.email)
  }

  validatedName():boolean{
    // const nameRegex = /^[a-zA-Z'&\-_.,!@#$%^*()+={}[\]:;"'<>/\\]+(?:\s+[a-zA-Z'&\-_.,!@#$%^*()+={}[\]:;"'<>/\\]+)*$/;
    const nameRegex = /^[a-zA-Z'-]+(?:\s+[a-zA-Z'-]+)*$/
    ;
    return nameRegex.test(this.userForm.name)
  }

  @ViewChild('userInfo')
  Form!: NgForm; 
  reset(){
    this.Form.reset({
      name: "",
    email:"",
    phoneNo:"",
    })
  }

}
