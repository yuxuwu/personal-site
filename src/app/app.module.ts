import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YuPanelComponent } from './yu-panel/yu-panel.component';
import { YuDescriptorComponent } from './yu-descriptor/yu-descriptor.component';
import { PanelTitleComponent } from './yu-panel/panel-title/panel-title.component';
import { PanelArrowComponent } from './yu-panel/panel-arrow/panel-arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    YuPanelComponent,
    YuDescriptorComponent,
    PanelTitleComponent,
    PanelArrowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
