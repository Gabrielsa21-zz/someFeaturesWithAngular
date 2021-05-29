import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { SalesTaxComponent } from './sales-tax.component';
import { HeroService } from './features/heroes/hero.service';

import { HeroesModule } from './features/heroes/heroes.module';

import { HeroDataSource, HeroesDataSourceImpl } from './features/heroes/data/datasources/heroes.data-source';
import { HeroesRepository } from './features/heroes/domain/repositories/heroes.repository';
import { HeroesRepositoryImpl } from './features/heroes/data/repositories/heroes.repository.impl';

import { HeroDetailComponent } from './features/heroes/presentation/screens/heroes-detail/hero-detail.component';
import { HeroListComponent } from './features/heroes/presentation/screens/heroes-list/hero-list.component';

import { HeroesState } from './features/heroes/presentation/store/hero.states';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    NgxsModule.forRoot([HeroesState], {
      developmentMode: !environment.production
    })
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    SalesTaxComponent
  ],
  providers: [
    HeroService,
    { provide: HeroesRepository, useClass: HeroesRepositoryImpl },
    { provide: HeroDataSource, useClass: HeroesDataSourceImpl },

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
