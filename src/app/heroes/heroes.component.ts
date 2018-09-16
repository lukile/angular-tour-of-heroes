import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes:  Hero[];

  constructor(private heroService: HeroService) {
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // Wait for the Observable emit the array of heroes, when done "subscribe" passes the emitted array to the callback
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
