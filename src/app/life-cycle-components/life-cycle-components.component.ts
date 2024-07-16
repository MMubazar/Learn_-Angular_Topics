import { Component, Input, SimpleChanges } from '@angular/core';

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

  @Input() counterValue!: number;

  constructor() {
    console.log('Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
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

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}
