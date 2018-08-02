import { Pipe, PipeTransform } from '@angular/core';
import { MovieModel } from '../../models/movie.model';

/**
 * Generated class for the FilterByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(movies: MovieModel[], query: string) {
    if(query){
      const finalQuery = query.toUpperCase();
      return movies.filter(m => {
        return m.title.toUpperCase().indexOf(finalQuery)
        > -1 || m.genre.toUpperCase().indexOf(finalQuery) > -1;
      });
    } else return movies;
  }
}
