import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDFormComponent } from './template-d-form/template-d-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BuildInPipesComponent } from './Pipes/build-in-pipes/build-in-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TemplateDFormComponent,
    ReactiveFormComponent,
    BuildInPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
