import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable, Subscription, switchMap, take, tap } from 'rxjs';
import { PokemonListService } from '../pokemon-list/pokemon-list.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon!: Subscription;
  url: string = '';

  constructor(
    private router: ActivatedRoute,
    private pokemonListService: PokemonListService
  ) { }

  ngOnInit(): void {
    this.pokemon = this.router.params.subscribe((param: any ) => {
      this.getPokemon(param['url'])
    })
    this.pokemonListService.getPokemons(2);
  }

  getPokemon(url: string) {
    this.pokemonListService.getPokemon(url);
  }

}