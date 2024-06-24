import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  public message: string = 'Hello, Angular!';
  public username: string = 'John Doe';
  public ImageUrl: string =
    'https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg';
  public isDisabled: boolean = false;
  public name: string = 'Angular User';
  public email: string = '';
  public role: string = 'admin';
  public ariaLabel: string = 'close button';
  public isActive: boolean = true;
  public isError: boolean = false;
  public bgColor: string = 'lightblue';
  public fontSize: string = '20px';

  handleClick() {
    if (this.ImageUrl) {
      this.isDisabled = !this.isDisabled;
      alert('Button clicked!');
    }
  }
  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
