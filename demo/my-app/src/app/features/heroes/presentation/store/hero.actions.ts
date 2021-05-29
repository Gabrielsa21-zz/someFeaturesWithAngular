import { IHeroEntity } from '../../domain/entities/hero.entity';
import { HeroesStateModel } from './hero.states';

export class SetHero {
    public static readonly type = '[Hero] Set selected hero';
    constructor(public payload: IHeroEntity) {}
}

export class GetHero {
    public static readonly type = '[Hero] Get One hero';
    constructor(public payload: string) {}
}


export class FetchHeroes {
    public static readonly type = '[Hero] Fetch heroes list';
    constructor(public search_query: any) {}
}

export class FetchHeroesSuccess {
    static readonly type = '[Hero] Fetch heroes Success';
    constructor(public payload: HeroesStateModel) {}
  }

export class FetchHeroesFail {
static readonly type = '[Hero] Fetch heroes Fail';
constructor(public error: any) {}
}
