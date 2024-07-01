import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() data: any;

  name: string = '';
  email: string = '';
  age: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('afterrrrrr==========>', this.data);
    if (changes['data']) {
      this.name = this.data.name;
      this.email = this.data.email;
      this.age = this.data.age;
    }
  }
}
