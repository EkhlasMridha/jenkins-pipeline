import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing/root-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RootRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
