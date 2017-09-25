import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
 
})
export class HeroSearchComponent implements OnInit {
 
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService,
    private router: Router) {}
 heroes:Hero[]=[];

  
  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    console.log(hero.id)
    this.router.navigate(link);
  }
}
