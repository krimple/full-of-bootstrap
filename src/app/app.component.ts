import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngb-alert title="This is an alert">Ouch!</ngb-alert>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
