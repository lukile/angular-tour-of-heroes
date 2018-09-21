import {Hero} from './hero';
import {MessageService} from './message.service';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Injectable()

export class HeroService {

  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Return a Observable<Hero[]> -> single value : array ok mock heroes
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetched heroes')),
        // Catch error intercept Observable which failed
        catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetch hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`Add new hero with name=${hero.name}`)),
      catchError(this.handleError<any>('add hero'))
    );
  }


  updateHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`update hero id=${hero.id}`)),
        catchError(this.handleError<any>('update hero'))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${ this.heroesUrl } / ${ id }`;

    return this.http.delete<Hero>(url, httpOptions).pipe(

      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('delete hero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${ operation } failed : ${error.message}`);

      return of(result as T);
    };
  }

  // Get heroes whose name contains "search term"
  searchHeroes(term: string): Observable<Hero[]> {
    if(!term.trim()) {
      // Return empty array if search term not found
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl }/?name=${ term }`).pipe(
      tap(_ => this.log(`found heroes matching "${ term }"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}


