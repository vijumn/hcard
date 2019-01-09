import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HcardEditComponent } from './components/hcard-edit/hcard-edit.component';
import { HcardViewComponent } from './components/hcard-view/hcard-view.component';
import { UiModule } from './shared/ui/ui.module';
import { HcardMainComponent } from './components/hcard-main/hcard-main.component';


@NgModule({
  declarations: [
    AppComponent,
    HcardEditComponent,
    HcardViewComponent,
    HcardMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
