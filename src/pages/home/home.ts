import { Component } from '@angular/core';
import { MovieModel } from "../../models/movie.model";
import { MoviesProvider } from "../../providers/movies/movies";
import { NavParams, NavController } from "ionic-angular";
import  { DetallePeliculaPage } from '../detalle-pelicula/detalle-pelicula';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: MovieModel[];
  user: string;
  searchQuery: string;
  constructor(private moviePrv: MoviesProvider, 
    private navParams: NavParams,
  private navCtrl:NavController) {}

  ngOnInit() {
    this.movies = this.moviePrv.getMovies();
    this.user = this.navParams.data.user;
  }

  openDetallePelicula(m){
    this.navCtrl.push(DetallePeliculaPage, {movie:m})
  }

}
