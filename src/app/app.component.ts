import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  //template:'<hello name={{name}}></hello>'//<h1>{{name}}</h1>,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  currentItem = 'Television';
  name = 'Angular ' + VERSION.major;

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem:string) {
    this.items.push(newItem);
  }

}
  