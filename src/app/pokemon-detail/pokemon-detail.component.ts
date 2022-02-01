import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { PokemonService } from '../shared/services/pokemon.service';

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
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemon = this.router.params.subscribe((param: any ) => {
      this.getPokemon(param['url'])
    })
    this.PokemonService.getPokemons(2);
  }

  getPokemon(url: string) {
    this.PokemonService.getPokemon(url);
  }

}
