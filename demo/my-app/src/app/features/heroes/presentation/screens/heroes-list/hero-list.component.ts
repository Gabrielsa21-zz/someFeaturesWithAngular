import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { IHeroEntity } from '../../../domain/entities/hero.entity';
//import { HeroService } from '../../../hero.service';


import { HeroesState } from '../../store/hero.states';
import { FetchHeroes, SetHero } from '../../store/hero.actions';


@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  //providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: IHeroEntity[];
  selectedHero: IHeroEntity;

  // *** CALL ACTION FetchHeroes with Dispatch
  heroesStore = this._store.dispatch(FetchHeroes);

  // *** Create a Store Selector to later subscribe to the Store State
  heroStoreSelector = this._store.select(HeroesState.getState);

  // ****
  // Public Variables
  heroesLoading: boolean = false;

  constructor(
    //private service: HeroService,
    private _store: Store,
    ) { }

  ngOnInit() {
    /*
    this.service.getHeroes().subscribe( result => {
      console.log(result);
      this.heroes = result.heroes;
    });
    */

    // *** Subscribe to LOAD PARTNERS LIST

    this.heroStoreSelector.subscribe( (data:any) => {

      console.log("data.loading: ", data.loading);

      this.heroesLoading = data.loading;

      this.heroes = data.heroes;

    });


  }

  selectHero(hero: IHeroEntity): void {
    this.selectedHero = hero;
  }

  /**
   * On hero selected
   *
   * @param hero
   */
  onHeroSelected(hero: IHeroEntity): void
  {
      this._store.dispatch(new SetHero(hero));
  }

}
