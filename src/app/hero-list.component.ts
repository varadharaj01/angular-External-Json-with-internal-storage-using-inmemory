import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.css' ]
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getnewHeroes()
        .then(heroes => this.heroes = heroes.slice(1));
       
  }

 

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
