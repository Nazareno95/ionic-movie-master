import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePeliculaPage } from './detalle-pelicula';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    DetallePeliculaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallePeliculaPage),
    ComponentsModule
  ],
})
export class DetallePeliculaPageModule {}
