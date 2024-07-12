import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-components',
  templateUrl: './life-cycle-components.component.html',
  styleUrl: './life-cycle-components.component.scss',
})
export class LifeCycleComponentsComponent {
  constructor() {
    console.log('Constructor');
  }
  public Changes: number = 23;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    console.log(this.Changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.Changes);
  }

  ngDoCheck() {
    console.log(this.Changes);

    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log(this.Changes);

    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log(this.Changes);

    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log(this.Changes);

    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log(this.Changes);

    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log(this.Changes);

    console.log('ngOnDestroy');
  }
}
