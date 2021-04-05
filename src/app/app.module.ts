import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DelonFormComponent } from './components';
import { DelonFormModule } from '@delon/form';
import { NzButtonModule, NzGridModule, NzInputModule} from 'ng-zorro-antd';
import { CustomFormComponent } from './components';
import {WidgetRegistry} from '@delon/form';

@NgModule({
  declarations: [
    AppComponent,
    DelonFormComponent,
    CustomFormComponent
  ],
  entryComponents: [
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // forRoot使其全局唯一
    DelonFormModule.forRoot(),
    NzButtonModule,
    NzGridModule,
    NzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(CustomFormComponent.KEY, CustomFormComponent);
  }
}
