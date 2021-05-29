import { HeroesRepository } from '../../domain/repositories/heroes.repository';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

import { IHeroEntity } from '../../domain/entities/hero.entity';

import { HeroDataSource } from '../datasources/heroes.data-source';

import { Injectable } from '@angular/core';

@Injectable()
export class HeroesRepositoryImpl extends HeroesRepository {
  constructor(
    private heroesDataSource: HeroDataSource,
  ) { super();}

  getAllHeroes(search_query: string = null): Observable<{ heroes: IHeroEntity[] }> {
    return this.heroesDataSource.getAllHeroes(search_query);
  }
}
