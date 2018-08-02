import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieModel } from '../../models/movie.model';

/**
 * Generated class for the DetallePeliculaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-pelicula',
  templateUrl: 'detalle-pelicula.html',
})
export class DetallePeliculaPage {
  favorita: boolean;
  movie : MovieModel;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public cerrarModal(): void {
    this.navCtrl.pop();
  }
  ngOnInit(){
    this.movie = this.navParams.data.movie;
    this.favorita = this.movie.favorita;
  }
  action (actionName: string){
    switch (actionName) {
      case 'like':
        this.movie.userLiked = true;
        break;
      case 'dislike':
        this.movie.userLiked = false;
        break;
      case 'favorita':
        this.favorita = !this.favorita;
        break;  
      default:


        console.error('Acción incorrecta!');
    }
  }
  ionViewWillLeave(){ 
  this.movie.favorita= this.favorita;
 }
}
