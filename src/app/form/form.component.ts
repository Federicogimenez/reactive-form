import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    registrationForm!: FormGroup;
    constructor(private fb: FormBuilder) { }
    ngOnInit(): void {
      this.setUpForm();
    }
  
    public setUpForm() {
      this.registrationForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        celNumber: ['', [Validators.required, Validators.minLength(10)]],
        destination: ['', [Validators.required, Validators.minLength(5)]],
      })
    }
    public onSubmit() {
      this.date()
    }
    public date() {
      let firstName = this.registrationForm.value.firstName || '';
      let lastName = this.registrationForm.value.lastName || '';
      let email = this.registrationForm.value.email || '';
      let notificacion = `Te has registrado éxitosamente ${firstName} ${lastName}.
     A continuación de llegará un email a ${email}`
      alert(notificacion)
      console.log('a')
    }

  }

