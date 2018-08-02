import { Component, EventEmitter, Input, Output } from '@angular/core';
//@ Models
import { MovieModel, MAX_MOVIE_SCORE } from "../../models/movie.model";

@Component({
  selector: 'movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoComponent {
  maxScore = MAX_MOVIE_SCORE;

  favorita = false;

  favoritaMsg = 'Quitar de favoritos';
  notFavoritaMsg = 'Agregar a favoritos';


  @Input() movie: MovieModel;
  @Output() movieAction: EventEmitter<string> = new EventEmitter<string>();;

  constructor() {}

  likeMovie() {
    this.movieAction.emit('like');
  }

  dislikeMovie() {
    this.movieAction.emit('dislike');
  }
  addFavorita(){
    this.movieAction.emit('favorita');
    this.favorita =!this.favorita;
  }

}
