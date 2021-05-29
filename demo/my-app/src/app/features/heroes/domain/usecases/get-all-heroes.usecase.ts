import { Injectable } from '@angular/core';
import { HeroesRepository } from '../repositories/heroes.repository';
import { IHeroEntity } from '../entities/hero.entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllHeroesUseCase {

  constructor(private heroesRepository: HeroesRepository) { }

  execute(search_query: string = null): Observable<{ heroes: IHeroEntity[] }> {
    return this.heroesRepository.getAllHeroes(search_query);
  }
}
