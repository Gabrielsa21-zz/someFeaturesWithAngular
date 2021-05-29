import { Component, Input } from '@angular/core';

import { IHeroEntity } from '../../../domain/entities/hero.entity';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: IHeroEntity;
}
