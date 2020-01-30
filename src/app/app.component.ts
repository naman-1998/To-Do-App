import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  storedPosts = [];

  onPostAdded(w) {
    this.storedPosts.push(w);
  }
}
