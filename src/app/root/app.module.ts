import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing/root-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHomeModule } from '../app-home/app-home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RootRoutingModule, BrowserAnimationsModule,AppHomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
