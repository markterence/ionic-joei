import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectFormPage } from './project-form';

@NgModule({
  declarations: [
    ProjectFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectFormPage),
  ],
  exports: [
    ProjectFormPage
  ]
})
export class ProjectFormPageModule {}
