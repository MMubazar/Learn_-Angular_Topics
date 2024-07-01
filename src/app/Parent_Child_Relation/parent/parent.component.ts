import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public form: FormGroup;
  public isShow: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get age() {
    return this.form.get('age');
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigate(['/child'], {
        state: { formValues: this.form.value },
      });
    }
  }
}
