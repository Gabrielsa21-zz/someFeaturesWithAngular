import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { IHeroEntity } from '../../domain/entities/hero.entity';
import { FetchHeroes, FetchHeroesFail, FetchHeroesSuccess, SetHero } from './hero.actions';

import { HeroService } from '../../hero.service';
import { catchError, mergeMap, tap } from 'rxjs/operators';

export interface HeroesStateModel {
  heroes: IHeroEntity[];
  selectedHeroes: IHeroEntity;
  error: any,
  loading: boolean
}

@State<HeroesStateModel>({
  name: 'heroes',
  defaults: {
    heroes: [],
    selectedHeroes: null,
    error: null,
    loading: false,
  }
})

@Injectable()
export class HeroesState {

  constructor(
    private _heroService: HeroService,
  ) {
    }

    @Selector()
    public static getState(state: HeroesStateModel) {
      return state;
    }

    @Selector()
    public static getHeroSelected(state: HeroesStateModel) {
      return state.selectedHeroes;
    }

    @Action(SetHero)
    public setHero(ctx: StateContext<HeroesStateModel>, { payload }: SetHero) {
      ctx.setState({ ...ctx.getState(), selectedHeroes: payload });
    }

    @Action(FetchHeroes)
    public fetchHeroes(ctx: StateContext<HeroesStateModel>, { search_query } : any) {

        ctx.patchState({
          loading: true
        });

        return this._heroService.getHeroes(search_query).subscribe( (data:any) =>{
          return ctx.dispatch(new FetchHeroesSuccess(data));
        }),
        catchError(error => {
          return ctx.dispatch(new FetchHeroesFail(error));
        });

    }

    @Action(FetchHeroesSuccess)
    fetchHeroesSuccess(
      ctx: StateContext<HeroesStateModel>,
      { payload }: FetchHeroesSuccess
    ) {
      console.log("payload: ",  payload);

      ctx.setState({
        heroes: payload.heroes,
        selectedHeroes: null,
        loading: false,
        error: null
      });
    }

    @Action(FetchHeroesFail)
    fetchHeroesFail(
      ctx: StateContext<HeroesStateModel>,
      { error }: FetchHeroesFail
    ) {
      ctx.setState({
        heroes: null,
        selectedHeroes: null,
        loading: false,
        error });
    }

}
