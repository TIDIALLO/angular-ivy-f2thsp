import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  //template:'<hello name={{name}}></hello>'//<h1>{{name}}</h1>,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
