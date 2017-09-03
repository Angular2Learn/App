import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWordComponent } from './hello-word.component';
import { SearchComponent } from './hello-word.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [HelloWordComponent, SearchComponent],
  bootstrap: [HelloWordComponent, SearchComponent]
})
export class HelloWordModule { }
