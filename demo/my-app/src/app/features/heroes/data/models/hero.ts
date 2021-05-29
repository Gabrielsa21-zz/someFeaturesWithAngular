import {
  IHeroEntity } from '../../domain/entities/hero.entity';

let nextId = 1;

export class Hero implements IHeroEntity {

  id: number;
  name: string;
  power: string;

  constructor(hero: any
    ) {
      this.id = nextId++;
      this.name = (hero && hero.name) || null;
      this.power = (hero && hero.power) || null;
    }
}
