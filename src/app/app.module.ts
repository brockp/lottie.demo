import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanizsaTriangleComponent } from './kanizsa-triangle/kanizsa-triangle.component';
import { KanizsaTriangleService } from './kanizsa-triangle/kanizsa-triangle.service';
import { SingleLegoOneComponent } from './single-lego-one/single-lego-one.component';
import { SingleLegoOneService } from './single-lego-one/single-lego-one.service';

@NgModule({
  declarations: [
    AppComponent,
    KanizsaTriangleComponent,
    SingleLegoOneComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [KanizsaTriangleService, SingleLegoOneService],
  bootstrap: [AppComponent],
})
export class AppModule {}
