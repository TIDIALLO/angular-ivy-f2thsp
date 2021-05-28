import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { AboutComponent } from '../about/about.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ParentComponent } from './parent/parent.component';
import { ItemOutputComponent } from '../item-output/item-output.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AboutComponent, ItemDetailsComponent, ParentComponent,ItemOutputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
