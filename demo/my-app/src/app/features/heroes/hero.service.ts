import { Injectable } from '@angular/core';
import { IHeroEntity } from './domain/entities/hero.entity';
// *** USES CASES
import { GetAllHeroesUseCase } from '../heroes/domain/usecases/get-all-heroes.usecase';
import { Observable } from 'rxjs/internal/Observable';
// ***

@Injectable()
export class HeroService {

  constructor(
    private _getAllHeroesUseCase: GetAllHeroesUseCase) { }

   getHeroes(
    keySearch: string = null,
  ): Observable<{heroes: IHeroEntity[]}> {

    return this._getAllHeroesUseCase.execute(keySearch);

  }
}
