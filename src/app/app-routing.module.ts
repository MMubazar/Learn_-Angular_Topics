import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { BuildInPipesComponent } from './pipesComponents/build-in-pipes/build-in-pipes.component';
import { CustomPipesComponent } from './pipesComponents/custom-pipes/custom-pipes.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDFormComponent } from './template-d-form/template-d-form.component';
import { ParentComponent } from './Parent_Child_Relation/parent/parent.component';
import { ChildComponent } from './Parent_Child_Relation/child/child.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive-forms', pathMatch: 'full' },
  { path: 'binding', component: BindingComponent },
  { path: 'built-in-pipes', component: BuildInPipesComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'template-forms', component: TemplateDFormComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
