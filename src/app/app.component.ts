import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  description = 'One framework. Mobile & desktop.';
  appPassMsg = 'This message passes to search component!';
}
