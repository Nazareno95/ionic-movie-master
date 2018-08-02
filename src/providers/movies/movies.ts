import { Injectable } from '@angular/core';
import { MovieModel, Ratings } from "../../models/movie.model";

@Injectable()
export class MoviesProvider {

  private movies: MovieModel[];

  constructor() {
    this.movies = [];

    const montyPython = new MovieModel({
      title: 'Kong',
      genre: 'Comedy',
      phrase: {
        quote: 'So unnecessarily gorgeous',
        author: 'Tom Huddleston'
      },
      rating: Ratings.ATP
    });
    montyPython.posterUrl = 'https://static.wixstatic.com/media/21607d_313e594e4b1b48bbb25dcc0cdfd258c7~mv2_d_1440_2160_s_2.jpg/v1/fill/w_339,h_508,al_c,q_90,usm_0.66_1.00_0.01/21607d_313e594e4b1b48bbb25dcc0cdfd258c7~mv2_d_1440_2160_s_2.webp';
    montyPython.sinopsis = 'The Knights of the Round Table set off in search of the Holy Grail on foot, as their lackeys make clippety-clop sounds with coconut shells. A plague-ridden community, ringing with the cry of "bring out your dead," offers its hale and hearty citizens to the body piles. A wedding of convenience is attacked by Arthur\'s minions while the pasty-faced groom continually attempts to burst into song. The good guys are nearly thwarted by the dreaded, tree-shaped "Knights Who Say Ni!" A feisty enemy warrior, bloodily shorn of his arms and legs in the thick of battle, threatens to bite off his opponent\'s kneecap. A French military officer shouts such taunts as "I fart in your general direction" and "I wave my private parts at your aunties." Rabbits are a particular obsession of the writers this time around, ranging from the huge Trojan Rabbit to the "killer bunny" that decapitates one of the knights.';
    montyPython.score = 9.75;
    montyPython.availableNow = false;

    this.movies.push(montyPython);

    const blackPanther = new MovieModel({
      title: 'Mummy',
      genre: 'Action',
      phrase: {
        quote: 'Beautiful, meticulously created, gorgeously shot, incredibly detailed, terrifically acted, brilliantly directed',
        author: 'TK Burton'
      },
      rating: Ratings.M13
    });
    blackPanther.posterUrl = 'https://m.media-amazon.com/images/M/MV5BODg1NTIxMzEtM2NmMi00MDQ2LWE5YjYtZTgxYmNhZTQxYWIzXkEyXkFqcGdeQXVyNDYzODU1ODM@._V1_SY1000_CR0,0,631,1000_AL_.jpg';
    blackPanther.sinopsis = '"Black Panther" follows T\'Challa who, after the events of "Captain America: Civil War," returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T\'Challa\'s mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk.';
    blackPanther.score = 8.2;
    blackPanther.availableNow = true;

    this.movies.push(blackPanther);

    const skyfall = new MovieModel({
      title: 'Skyfall',
      genre: 'Thriller, Action, Spies',
      phrase: {
        quote: 'Best Bond yet!',
        author: 'Scott Mantz'
      },
      rating: Ratings.M16,
      posterUrl: 'http://es.web.img2.acsta.net/pictures/15/11/13/08/29/165153.jpg',
      availableNow: true,
      sinopsis: 'In Skyfall, Bond\'s loyalty to M is tested as her past comes back to haunt her. As MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost',
      score: 9.1
    });

    this.movies.push(skyfall);
  
  this.movies.push(new MovieModel({
    title: 'The Matrix',
    score: 7.6,
    phrase: {
      quote: 'Where other films are done in by the freedom offered by computer effects, The Matrix integrates them beautifully.',
      author: 'Keith Philipps'
    },
    genre: 'Action, Sci-fi',
    rating: Ratings.M18,
    availableNow: true,
    posterUrl: 'https://resizing.flixster.com/EsE5EO3Q2Sw6BSfSBujfprqqcfg=/206x305/v1.bTsxMTE2ODA5NjtqOzE3ODE0OzEyMDA7ODAwOzEyMDA'
  }))
  }
  getMovies(): MovieModel[] {
    return this.movies;
  }

}
