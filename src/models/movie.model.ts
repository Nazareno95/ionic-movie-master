interface Phrase {
  quote: string;
  author: string;
}

export enum Ratings {
  ATP,
  M13,
  M13R,
  M16,
  M18,
  NR
}

export const MAX_MOVIE_SCORE = 10;

export class MovieModel {
  title: string;
  genre: string;
  phrase: Phrase;
  availableNow: boolean;
  posterUrl: string;
  favorita: boolean;  
  private _sinopsis: string;
  private _score: number;
  private _rating: Ratings;

  userLiked;


  private ratingsName = [];

  constructor(data: {title: string, genre: string, phrase: Phrase, rating: Ratings,
                    sinopsis?: string, availableNow?: boolean, score?: number, posterUrl?: string}){
    this.title = data.title;
    this.genre = data.genre;
    this.phrase = data.phrase;
    this._rating = data.rating;
    this.availableNow = !!data.availableNow;
    this.sinopsis = data.sinopsis || '';
    this.score = data.score || 0;
    this.posterUrl = data.posterUrl || '';
    this.setRatings();
  }

  private setRatings() {
    this.ratingsName[Ratings.ATP] = 'ATP';
    this.ratingsName[Ratings.M13] = 'Mayores de 13';
    this.ratingsName[Ratings.M13R] = 'Mayores de 13 con restricción';
    this.ratingsName[Ratings.M16] = 'Mayores de 16';
    this.ratingsName[Ratings.M18] = 'Mayores de 18';
    this.ratingsName[Ratings.NR] = 'Sin clasificar';
  }

  get sinopsis(): string {
    return this._sinopsis;
  }

  set sinopsis(value: string) {
    this._sinopsis = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if(value >= 0 && value <= MAX_MOVIE_SCORE) {
      this._score = value;
    } else {
      console.error(`La película no puede tener un valor ${value}, debe estar entre 0 y ${MAX_MOVIE_SCORE}`);
    }
  }

  get rating() {
    return this.ratingsName[this._rating];
  }
}
