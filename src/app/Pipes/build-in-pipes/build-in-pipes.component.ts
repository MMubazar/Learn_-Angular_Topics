import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-build-in-pipes',
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.scss',
})
export class BuildInPipesComponent {
  counter: Observable<number>;

  constructor() {
    this.counter = interval(1000);
    console.log('Counter===>', this.counter); // Emits a number every second
  }
  public price: number = 12345.6789;
  public today: any = new Date();
  public myObject: any = { name: 'John Doe', age: 30, city: 'New York' };
  public lowerCase: string = 'HELLO WORLD';
}
