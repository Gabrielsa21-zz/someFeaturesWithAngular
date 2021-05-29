import { Observable } from 'rxjs';
import { IHeroEntity } from '../entities/hero.entity';

export abstract class HeroesRepository {
  abstract getAllHeroes(search_query: string): Observable<{ heroes: IHeroEntity[] }>;
}
