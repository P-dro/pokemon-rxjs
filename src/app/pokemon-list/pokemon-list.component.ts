import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, Subscription, take, tap } from 'rxjs';
import { PokemonListResponse } from '../models/pokemon-list';
import { PokemonService } from '../shared/services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList$!: Observable<PokemonListResponse>;
  currentPage$: Observable<number> = this.router.params.pipe(
    map(p => parseInt(p['page'])),
    take(1)
  );
  page: number = 1

  subscription: Subscription = this.currentPage$.subscribe(
    (e)=> this.page = e,
    error => new Error(JSON.stringify(error))
  )


  constructor(
    private PokemonService: PokemonService,
    private router: ActivatedRoute,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.getPokemons(this.page)
    console.log(this.subscription)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPokemons(page: number): void {
    this.route.navigate(['pokemon-list', page]);
    this.pokemonList$ = this.PokemonService.getPokemons(page);
  }

  getTotalPages(count: number): number {
    return Math.round(count / 20);
  }



  pokemonListPagination(count: number, currentPage: number): Array<number> {
    const totalPages = this.getTotalPages(count);
    console.log(totalPages)
    console.log(currentPage)

    if (currentPage == 1 || currentPage == 2 || currentPage == 3) {
      return new Array(5).fill(1).map((e, i) => e + i);
    }

    if(currentPage == totalPages || currentPage == totalPages - 1 || currentPage == totalPages - 2) {
      return new Array(5).fill(totalPages - 4).map((e, i) => e + i);
    }
    
    return new Array(totalPages).fill(1).map((e, i) => e + i).slice(currentPage - 3, currentPage + 2);
  }

}
