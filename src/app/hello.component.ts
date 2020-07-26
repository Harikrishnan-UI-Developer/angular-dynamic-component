import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

@Component({
  selector: 'Hi',
  template: `<h1>Hi {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HiComponent  {
  @Input() name: string;
}
