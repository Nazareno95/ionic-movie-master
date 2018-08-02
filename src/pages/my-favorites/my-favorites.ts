import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MovieModel } from "../../models/movie.model";
import { MoviesProvider } from "../../providers/movies/movies";

@IonicPage()
@Component({
  selector: 'page-my-favorites',
  templateUrl: 'my-favorites.html',
})
export class MyFavoritesPage {
  movies: MovieModel[];

  constructor(private moviePrv: MoviesProvider) {
  }

  ngOnInit() {
    this.movies = this.moviePrv.getMovies();
  }

}
