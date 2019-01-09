import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HcardEditComponent } from './components/hcard-edit/hcard-edit.component';
import { HcardViewComponent } from './components/hcard-view/hcard-view.component';
import { UiModule } from './ui/ui.module';


@NgModule({
  declarations: [
    AppComponent,
    HcardEditComponent,
    HcardViewComponent
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
