import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDFormComponent } from './template-d-form/template-d-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BuildInPipesComponent } from './pipesComponents/build-in-pipes/build-in-pipes.component';
import { CustomPipesComponent } from './pipesComponents/custom-pipes/custom-pipes.component';
import { TitleCasePipePipe } from '../app/pipes/title-case-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './Parent_Child_Relation/parent/parent.component';
import { ChildComponent } from './Parent_Child_Relation/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    TemplateDFormComponent,
    ReactiveFormComponent,
    BuildInPipesComponent,
    CustomPipesComponent,
    TitleCasePipePipe,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
