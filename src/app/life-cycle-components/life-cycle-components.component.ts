import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-components',
  templateUrl: './life-cycle-components.component.html',
  styleUrl: './life-cycle-components.component.scss',
})
export class LifeCycleComponentsComponent {
  // constructor() {
  //   console.log('Constructor');
  // }
  public Changes: number = 23;
  public formData: any;
  // Example#01
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes);
  //   console.log(this.Changes);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  //   console.log(this.Changes);
  // }

  // ngDoCheck() {
  //   console.log(this.Changes);

  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log(this.Changes);

  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log(this.Changes);

  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log(this.Changes);

  //   console.log('ngAfterViewInit');
  //   console.log('con');
  // }

  // ngAfterViewChecked() {
  //   console.log(this.Changes);

  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy() {
  //   console.log(this.Changes);

  //   console.log('ngOnDestroy');
  // }

  // example#02
  @Input() counterValue!: number;
  @Input() config!: any;

  // constructor() {
  //   console.log('Constructor');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges', changes);
  //   console.log('Value: ', this.counterValue);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy');
  // }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  // example#03
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    if (changes['config']) {
      this.createForm();
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  createForm() {
    const group: any = {};
    this.config.forEach((control: any) => {
      group[control.name] = ['', control.validators ? control.validators : []];
    });
    this.form = this.fb.group(group);
  }

  onSubmit() {
    this.formData = this.form.value;
    console.log(this.form.value);
    this.form.reset();
  }
}
