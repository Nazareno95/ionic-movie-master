import { NgModule } from '@angular/core';
import { HomeContentComponent } from './home-content/home-content';
import { MovieInfoComponent } from './movie-info/movie-info';
import { IonicModule } from "ionic-angular";
@NgModule({
	declarations: [HomeContentComponent,
    MovieInfoComponent],
	imports: [IonicModule],
	exports: [HomeContentComponent,
    MovieInfoComponent]
})
export class ComponentsModule {}
