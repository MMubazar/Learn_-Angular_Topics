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
}
