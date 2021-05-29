import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Hero } from '../models/hero';

const HEROES = [
        new Hero({
          id: 1,
          name: 'Windstorm',
          power: 'Weather mastery'}),

        new Hero({
          id: 2,
          name: 'Dr Nice', power: 'Killing them with kindness'}),
        new Hero({
          id: 3,
          name: 'Magneta', power: 'Manipulates metallic objects'})
      ];

export abstract class HeroDataSource {
  abstract getAllHeroes(search_query: string): Observable<{ heroes: Hero[] }>;
}

@Injectable()
export class HeroesDataSourceImpl extends  HeroDataSource {
  private readonly PARTNER_URL = 'partner';

  constructor(
      //private _connectorService: HttpConnectorService,
      ) { super();
      }

      getAllHeroes(search_query: string): Observable<{ heroes: Hero[] }> {

        return new Observable((subscriber) => {
          setTimeout(()=>{
              subscriber.next({ heroes: HEROES });
              subscriber.complete();
          }, 3000);
      });
    }
}
