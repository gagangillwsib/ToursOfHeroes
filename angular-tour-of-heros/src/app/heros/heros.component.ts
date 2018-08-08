import { Component, OnInit, } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;
  counter: string;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // getHeroes (): void {
  //   this.heroService = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes().
    subscribe(heroes  => this.heroes = heroes );
  }
  add(name: string) {
    name = name.trim();
    if (!name) {return name; }
    this.heroService.addHero({ name } as Hero).
    subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  delete(hero: Hero) {
    this.heroes = this.heroes.filter( h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
