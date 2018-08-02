import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { MyFavoritesPage } from './my-favorites';

@NgModule({
  declarations: [
    MyFavoritesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFavoritesPage),
    IonicModule
  ],
})
export class MyFavoritesPageModule {}
